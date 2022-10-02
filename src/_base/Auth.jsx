import React from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { pages, guestPage } from "links/pages";
import TokenService from '_services/token.service';
import { staticPages } from 'links';

const Auth = ({ children }) => {
    const userModel = TokenService.getUser();
    const location = useLocation();
    const history = useHistory();
    function checkLogin() {
        if (userModel && userModel.isLogin) {
            if (guestPage.includes(location.pathname)) {
                history.push(pages.HOME);
                return true;
            }
        } else {
            if (!staticPages.includes(location.pathname) && !guestPage.includes(location.pathname)) {
                const refurl = localStorage.getItem("REFEERER_URL");
                if (!Boolean(refurl)) {
                    localStorage.setItem("REFEERER_URL", window.location.href);
                }
                history.push(pages.LOGIN);
                return false;
            }
        }
        return (
            <div key="AuthController">
                {children}
            </div>
        );
    }
    return checkLogin();
}

export default Auth;