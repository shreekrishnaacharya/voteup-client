import { Route, Switch } from 'react-router-dom';
import { pages } from "links/pages";
import Login from './view/Login';
import Signup from "./view/Register"
// import ForgotPassword from "./view2/forgetPassword";
// import NewPassword from "./view/newPassword";
// import VerifyToken from "./view/verifyToken";

function SiteController() {
    return (
        <>
            <Route exact path={pages.LOGIN} component={Login} />
            {/* <Route exact path={pages.FORGOT_PASSWORD} component={ForgotPassword} />
            <Route exact path={pages.VERIFY_TOKEN} component={VerifyToken} />
            <Route exact path={pages.NEW_PASSWORD} component={NewPassword} /> */}
            <Route exact path={pages.SIGNUP} component={Signup} />
        </>
    );
}

export default SiteController;