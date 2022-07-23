import { getApiRequest as getApi, getJsonForm } from '_services';


const getApiRequest = async (requestData) => {
    // console.log(requestData);
    const result = await getApi({
        ...requestData
    }).then(function (response) {
        return { flag: true, headers: response.headers, status: response.status, message: "Success", data: response.data };
    }).then(function (finalJson) {
        return finalJson;
    }).catch((error) => {
        // console.log(error);
        return { flag: false, status: error.status, message: "Error", data: error.data };
    });
    return result;
}

async function getFeeds() {
    return await getApiRequest({
        url: "/feeds",
    }).then((result) => {
        return result;
    });
}

async function getRecent() {
    return await getApiRequest({
        url: "/feeds",
        data: { sort: "-id", size: "5" }
    }).then((result) => {
        return result;
    });
}

async function addPost(idata) {
    return await getApiRequest({
        url: "/feeds/",
        method: "post",
        data: getJsonForm(idata),
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then((result) => {
        return result;
    });
}

async function actionUpdate(id, type) {
    return await getApiRequest({
        url: "/feeds/action",
        method: "post",
        data: {
            id,
            type
        },
    }).then((result) => {
        return result;
    });
}

async function getLocationList() {
    return await getApiRequest({
        url: "/location",
    }).then((result) => {
        return result;
    });
}

export {
    getFeeds,
    getRecent,
    addPost,
    actionUpdate,
    getLocationList
};