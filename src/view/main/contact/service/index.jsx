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

async function getContactList(param) {
    return await getApiRequest({
        url: "/contact",
        data: {
            ...param
        }
    }).then((result) => {
        return result;
    });
}

async function getContactDetail(id) {
    return await getApiRequest({
        url: "/contact/" + id
    }).then((result) => {
        return result;
    });
}

async function getContactDelete(id) {
    return await getApiRequest({
        url: "/contact/" + id,
        method: "delete"
    }).then((result) => {
        return result;
    });
}

async function addContact(idata) {
    console.log(getJsonForm(idata), idata);
    return await getApiRequest({
        url: "/contact/",
        method: "post",
        data: getJsonForm(idata),
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then((result) => {
        return result;
    });
}

async function updateContact(id, idata) {
    idata["ads"] = idata["address"];
    delete idata["address"];
    console.log(idata);
    const fdata = getJsonForm(idata);
    return await getApiRequest({
        url: "/contact/" + id,
        method: "put",
        data: fdata,
        headers: { 'Content-Type': 'multipart/form-data' }
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
    getContactList,
    getContactDetail,
    addContact,
    updateContact,
    getContactDelete,
    getLocationList
};