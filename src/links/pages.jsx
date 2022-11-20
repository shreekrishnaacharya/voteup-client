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
const otherPages = {
    PAGES: "/page",
    STATUS_404: "/page/404",
    PRIVACY: "/page/privacy-policy",
    TERMS: "/page/terms-and-conditions",
    FAQ: "/page/faq",
    RULES: "/page/rules",
    BLOG: "/page/blog",
}

const pages = {
    BASE_URL: "http://ventvoila.com/api",
    // BASE_URL: '/api',
    // BASE_URL: "http://localhost:8080/api",
    // BASE_URL: "http://192.168.1.81:8080/api",
    GUEST: "/guest",
    HOME: "/",
    ...otherPages,
    ...sitePage,
    ...votePages
};

const guestPage = [
    pages.FORGOT_PASSWORD,
    pages.LOGIN,
    pages.SIGNUP,
    pages.NEW_PASSWORD,
    pages.VERIFY_ACCOUNT,
    pages.VERIFY_TOKEN,

];

const staticPages = [
    otherPages.RULES,
    otherPages.BLOG,
    otherPages.FAQ,
    otherPages.PAGES,
    otherPages.PRIVACY,
    otherPages.TERMS,
    otherPages.STATUS_404
]

const getFullUrl = (page) => {
    return pages.LOCAL_URL + "#" + page;
}

export { pages, sitePage, votePages, guestPage, otherPages, staticPages, getFullUrl };