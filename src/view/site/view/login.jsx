import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from 'notistack';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { setLogin } from "redux/action/userAction";

import { pages } from "links/pages";


import { getLogin } from '../service';

import './style.css';
import { width } from "@mui/system";
import TokenService from "_services/token.service";

const schema = yup.object({
    username: yup.string().required("Email cannot be blank").email(),
    password: yup.string().required("Password cannot be blank"),
});

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [rememberMe, setRememberMe] = useState(true);
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const { enqueueSnackbar } = useSnackbar();

    const handleSetRememberMe = () => setRememberMe(!rememberMe);

    const onSubmitHandler = async (fdata) => {
        await getLogin(fdata).then((res) => {
            if (res.flag == true) {
                enqueueSnackbar("Login success", {
                    variant: 'success',
                });
                TokenService.setUser({
                    ...res.data
                });
                dispatch(setLogin({
                    ...res.data
                }));
                history.push({
                    pathname: pages.DASHBOARD
                });
            } else {
                enqueueSnackbar("Invalid login detail", {
                    variant: 'error',
                });
            }
        });
    }

    return (
        <div>
            <div className="ui center aligned grid">
                <div style={{ maxWidth: '450px', width: '100%' }}>
                    <h2 className="ui teal header" style={{ marginTop: '100px' }}>
                        <i className="ui sign-in icon"></i>
                        <div className="content">
                            Welcome!!
                        </div>
                    </h2>
                    <form className="ui large form" onSubmit={handleSubmit(onSubmitHandler)}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <Controller
                                    name="username"
                                    defaultValue=""
                                    control={control}
                                    render={({ field, fieldState }) => {
                                        return (
                                            <>
                                                <div className="ui left icon input">
                                                    <i className="user icon"></i>
                                                    <input {...field} placeholder="E-mail address" />
                                                </div>
                                                <span className="ui red">{fieldState.error?.message}</span>
                                            </>
                                        )
                                    }}
                                />
                            </div>
                            <div className="field">
                                <Controller
                                    name="password"
                                    defaultValue=""
                                    control={control}
                                    render={({ field, fieldState }) => {
                                        return (
                                            <>
                                                <div className="ui left icon input">
                                                    <i className="lock icon"></i>
                                                    <input type="password" {...field} placeholder="Password" />
                                                </div>
                                                <span className="ui red">{fieldState.error?.message}</span>
                                            </>
                                        )
                                    }}
                                />
                            </div>
                            <div>
                                <input type={'checkbox'} checked={rememberMe} onChange={handleSetRememberMe} />
                                <span onClick={handleSetRememberMe}>
                                    &nbsp;&nbsp;Remember me
                                </span>
                            </div>
                            <button style={{ margin: '10px 0' }} type="submit" className="ui fluid large teal submit button">
                                Sign In
                            </button>
                            <div>
                                Forgot Password?
                                <Link to={pages.FORGOT_PASSWORD} >
                                    Click Here
                                </Link></div>
                        </div>
                        {/* <div className="ui error message"></div> */}
                    </form>
                    <div className="ui message">
                        New to us?&nbsp;
                        <Link to={pages.SIGNUP} >
                            SIGNUP
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
