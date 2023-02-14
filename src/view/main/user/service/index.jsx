import { getJsonForms } from "_services";
import { getApiRequest as getApi, getJsonForm } from "_services";

const getApiRequest = async (requestData) => {
  const result = await getApi({
    ...requestData,
  })
    .then(function (response) {
      return {
        flag: true,
        headers: response.headers,
        status: response.status,
        message: "Success",
        data: response.data,
      };
    })
    .then(function (finalJson) {
      return finalJson;
    })
    .catch((error) => {
      // console.log(error)
      return {
        flag: false,
        status: error.response?.status,
        message: "Error",
        data: error.response?.data,
      };
    });
  return result;
};

async function getFeeds() {
  return await getApiRequest({
    url: "/feeds",
  }).then((result) => {
    return result;
  });
}

async function getHiddenPost() {
  return await getApiRequest({
    url: "/feeds/hide-list",
  }).then((result) => {
    return result;
  });
}

async function getProfile() {
  return await getApiRequest({
    url: "/user",
  }).then((result) => {
    return result;
  });
}

async function updateStory(fdata) {
  return await getApiRequest({
    url: "/user/story",
    method: "post",
    data: fdata,
  }).then((result) => {
    return result;
  });
}

async function updateProfile(fdata) {
  return await getApiRequest({
    url: "/user",
    method: "put",
    data: getJsonForm(fdata),
    headers: { "Content-Type": "multipart/form-data" },
  }).then((result) => {
    return result;
  });
}

async function updateKyc(fdata) {
  return await getApiRequest({
    url: "/user/kyc",
    method: "put",
    data: getJsonForm(fdata),
    headers: { "Content-Type": "multipart/form-data" },
  }).then((result) => {
    return result;
  });
}

async function updatePassword(fdata) {
  return await getApiRequest({
    url: "/user/change-password",
    method: "post",
    data: fdata,
  }).then((result) => {
    return result;
  });
}

export {
  getFeeds,
  getProfile,
  updateStory,
  updateProfile,
  updatePassword,
  updateKyc,
  getHiddenPost,
};
