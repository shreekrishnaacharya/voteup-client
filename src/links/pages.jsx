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
    BLOG: "/page/blog",
}

const pages = {
    BASE_URL: "http://ventvoila.com",
    // BASE_URL: "http://localhost:8080",
    // LOCAL_URL: "http://localhost:3000",
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