import axios from "axios";
import { pages } from "links/pages";
import TokenService from "./token.service";

const instance = axios.create({
    baseURL: pages.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
instance.interceptors.request.use(
    (config) => {
        const token = TokenService.getLocalAccessToken();
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
            // config.headers["x-access-token"] = token; // for Node.js Express back-end
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
let refreshTokenRequest = false;

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        let originalConfig = err.config;
        if (originalConfig.url != pages.LOGIN && err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !refreshTokenRequest) {
                refreshTokenRequest = true;
                try {
                    const rs = await instance.post("/auth/refreshtoken", {
                        refreshToken: TokenService.getLocalRefreshToken(),
                    });
                    const { token } = rs.data;
                    TokenService.updateLocalAccessToken(token);
                    return instance(originalConfig);
                } catch (_error) {
                    TokenService.removeUser();
                    window.location.reload();
                    return Promise.reject(_error);
                }
            } else if (refreshTokenRequest) {
                refreshTokenRequest = false;
                TokenService.removeUser();
            }
        }
        return Promise.reject(err);
    }
);

const getApiRequest = async (options) => {
    let method = 'get';
    if ('method' in options) {
        method = (options.method).toLowerCase()
    }
    const url = options.url;
    delete options['method'];
    delete options['url'];
    if (method == 'get' || method == 'delete') {
        options['params'] = options.data;
        delete options['data'];
        return instance[method](url, options);
    } else {
        const data = options.data;
        delete options['data'];
        return instance[method](url, data, options);
    }
}


const getDownload = async (url) => {
    await getApiRequest({
        url,
        responseType: "blob"
    }).then(({ data }) => {
        const a = document.createElement("a");
        // creating a reference to the file
        const url = window.URL.createObjectURL(data);
        // setting anchor tag's href attribute to the blob's URL
        a.href = url;
        // setting anchor tag's download attribute to the filename
        a.download = "Report.pdf";
        document.body.append(a);
        // click on the <a> tag
        a.click();
        // after clicking it, remove it from the DOM
        a.remove();
        // release an existing object URL which was previously 
        // created by calling URL.createObjectURL()
        // once we have finished using an object URL, let the
        // browser know not to keep the reference to the file any longer.
        window.URL.revokeObjectURL(url);
    })

}


export { getApiRequest, getDownload };
