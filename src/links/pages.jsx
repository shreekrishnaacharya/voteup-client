
const contactPage = {
    CONTACT_LIST: "/contact",
    CONTACT_ADD: "/contact/add",
    CONTACT_VIEW: "/contact/view",
    CONTACT_UPDATE: "/contact/view/update",
}

const sitePage = {
    LOGIN: "/guest",
    NEW_PASSWORD: "/guest/new-password",
    VERIFY_ACCOUNT: "/guest/verify-account",
    SIGNUP: "/guest/signup",
    FORGOT_PASSWORD: "/guest/forgot-password",
    VERIFY_TOKEN: "/guest/verify-token",
}

const pages = {
    // BASE_URL: "http://mystore.com/index.php",
    BASE_URL: "http://localhost:3000",
    LOCAL_URL: "http://localhost:3000",
    PROFILE: "/user",
    GUEST: "/guest",
    PROFILE_UPDATE: "/user/update",
    PROFILE_UPDATE_PASSWORD: "/user/update-password",
    HOME: "/home",
    DASHBOARD: "/dashboard",
    ...sitePage,
    ...contactPage,
};

const guestPage = [
    pages.FORGOT_PASSWORD,
    pages.LOGIN,
    pages.SIGNUP,
    pages.NEW_PASSWORD,
    pages.VERIFY_ACCOUNT,
    pages.VERIFY_TOKEN
];

const getFullUrl = (page) => {
    return pages.LOCAL_URL + "#" + page;
}

export { pages, sitePage,guestPage, contactPage,  getFullUrl };