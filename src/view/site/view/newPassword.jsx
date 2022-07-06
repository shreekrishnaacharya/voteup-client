import React, { useState } from 'react';

import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from 'notistack';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { pages } from "links/pages";
import { useLocation, useHistory } from "react-router-dom";
import { getNewPassword } from '../service';

const schema = yup.object({
    new_password: yup.string().required("Password cannot be blank").min(6),
    confirm_password: yup.string().required("Confirm password cannot be blank").min(6),
});

const NewPassword = () => {
    const history = useHistory();
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const { enqueueSnackbar } = useSnackbar();
    if (!history.location.state) {
        history.push(pages.FORGOT_PASSWORD);
        return <></>;
    }
    const { id, email, verifyCode } = history.location.state;

    const onSubmitHandler = async (fdata) => {
        await getNewPassword({
            ...fdata,
            id,
            verifyCode
        }).then(({ flag, message, data }) => {
            if (flag) {
                enqueueSnackbar(message, {
                    variant: 'success',
                });
                history.push({
                    pathname: pages.LOGIN
                });
            } else {
                enqueueSnackbar(message, {
                    variant: 'warning',
                });
            }
        });
    }

    return (
        <div className="ui card">
            <h2 className="header">Change Password</h2>
            <h4>Enter new password and confirm it for {email}</h4>
            <form className="ui form" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="field">
                    <label>New Password</label>
                    <Controller
                        name="new_password"
                        control={control}
                        render={({ field, fieldState }) => {
                            return (
                                <>
                                    <input type="password" {...field} />
                                    <span >{fieldState.error?.message}</span>
                                </>
                            )
                        }}
                    />
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <Controller
                        name="confirm_password"
                        control={control}
                        render={({ field, fieldState }) => {
                            return (
                                <>
                                    <input type="password" {...field} error={fieldState.invalid} />
                                    <span>{fieldState.error?.message}</span>
                                </>
                            )
                        }}
                    />
                </div>
                <div>
                    <button type="submit" className='ui button primary'>
                        Change
                    </button>
                </div>
            </form>
        </div >
    );

}

export default NewPassword;