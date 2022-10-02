
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

import { sitePage } from "links/pages";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// Images
import { useSnackbar } from "notistack";
import { useForm, Controller } from "react-hook-form";
import { getSignup } from "../service";

const schema = yup.object({
    email: yup.string().required("Email cannot be blank").email(),
    temp_password: yup.string().required("Password cannot be blank").min(6),
    name: yup.string().required("Name cannot be blank"),
    gender: yup.string().required("Gender is required"),
    address: yup.string().required("Address is required"),
    agree: yup.bool()
        .oneOf([true], 'You must agree to the terms and conditions'),
});

function SignUp() {
    const [agreement, setAgremment] = useState(true);
    const { handleSubmit, control, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema),
    });

    const handleSetAgremment = () => {
        setValue("agree", !agreement);
        setAgremment(!agreement);
    };

    const { enqueueSnackbar } = useSnackbar();

    const onSubmitHandler = async (fdata) => {
        await getSignup(fdata).then((res) => {
            if (res.flag == true) {
                enqueueSnackbar("Signup success", {
                    variant: 'success',
                });
                history.push({
                    pathname: sitePage.LOGIN
                });
            } else {
                enqueueSnackbar("Signup failed", {
                    variant: 'error',
                });
            }
        });
    }

    return (
        <div className="ui center aligned grid">
            <div style={{ maxWidth: '450px', width: '100%' }}>
                <h2 className="ui teal header" style={{ marginTop: '50px' }}>
                    <i className="ui sign-in icon"></i>
                    <div className="content">
                        Sign Up!!
                    </div>
                </h2>
                <form className="ui large form" onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="ui stacked segment">
                        <div className="field">
                            <label>Name</label>
                            <Controller
                                name="name"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <input placeholder="Name" {...field} />
                                            <span>{fieldState.error?.message}</span>
                                        </>
                                    )
                                }}
                            />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <Controller
                                name="email"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <input placeholder="Email" {...field} />
                                            <span>{fieldState.error?.message}</span>
                                        </>
                                    )
                                }}
                            />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <Controller
                                name="temp_password"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <input type="password" placeholder="Password" {...field} />
                                            <span>{fieldState.error?.message}</span>
                                        </>
                                    )
                                }}
                            />
                        </div>
                        <div className="field">
                            <label>Address</label>
                            <Controller
                                name="address"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <input placeholder="Address" {...field} />
                                            <span>{fieldState.error?.message}</span>
                                        </>
                                    )
                                }}
                            />
                        </div>
                        <div className="inline fields">
                            <label htmlFor="gender">Gender</label>
                            <Controller
                                name="gender"
                                defaultValue="M"
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <div className="field">
                                                <div className="ui radio checkbox">
                                                    <input type="radio" name="gender" value={'M'} checked="" tabindex="0" className="hidden" />
                                                    <label>Male</label>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <div className="ui radio checkbox">
                                                    <input type="radio" name="gender" value={'F'} tabindex="0" className="hidden" />
                                                    <label>Female</label>
                                                </div>
                                            </div>
                                            <span>{fieldState.error?.message}</span>
                                        </>
                                    )
                                }}
                            />
                        </div>
                        <div className="inline field">
                            <Controller
                                name="agree"
                                defaultValue={agreement}
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <div className="ui checkbox">
                                                <input type="checkbox" tabindex="0" className="hidden"
                                                    onClick={handleSetAgremment} {...field} checked={agreement}
                                                />
                                                <label>I agree to all the <a>terms and conditions</a></label>
                                            </div>
                                            <span>{fieldState.error?.message}</span>
                                        </>
                                    )
                                }}
                            />
                        </div>
                        <div>
                            <button style={{ margin: '10px 0' }} type="submit" className="ui fluid large teal button primary">
                                Sign Up
                            </button>
                        </div>
                        <div>
                            <div>
                                Already have an account?&nbsp;
                                <Link
                                    to={sitePage.LOGIN}
                                >
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </div>
                </form >
            </div>
        </div >
    );
}

export default SignUp;
