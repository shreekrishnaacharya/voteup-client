const votePages = {
    FEEDS: "/vote/feeds",
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
    // BASE_URL: "http://mystore.com/index.php",
    BASE_URL: "http://localhost:3000",
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