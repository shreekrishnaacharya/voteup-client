const votePages = {
    FEEDS: "/vote/feeds",
    POST: "/post",
    USER: "/user",
    PROFILE: "/profile"
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
    // BASE_URL: "https://app-f51dd389-d290-44a4-914c-af2905391a7c.cleverapps.io",
    BASE_URL: "http://localhost:8080",
    LOCAL_URL: "http://localhost:3000",
    GUEST: "/guest",
    HOME: "/",
    ...sitePage,
    ...votePages
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

export { pages, sitePage, votePages, guestPage, getFullUrl };