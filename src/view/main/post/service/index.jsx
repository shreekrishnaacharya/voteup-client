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

async function addComment(id, idata) {
    return await getApiRequest({
        url: "/feeds/comment/" + id,
        method: "post",
        data: idata,
    }).then((result) => {
        return result;
    });
}

async function actionUpdateAction(id) {
    return await getApiRequest({
        url: "/feeds/action",
        method: "post",
        data: {
            id
        },
    }).then((result) => {
        return result;
    });
}

async function getViewPost(id) {
    return await getApiRequest({
        url: "/feeds/" + id,
    }).then((result) => {
        return result;
    });
}

async function deleteComment(id) {
    return await getApiRequest({
        url: "/feeds/" + id,
        method: "delete",
    }).then((result) => {
        return result;
    });
}
export {
    addComment,
    actionUpdateAction,
    getViewPost,
    deleteComment
};