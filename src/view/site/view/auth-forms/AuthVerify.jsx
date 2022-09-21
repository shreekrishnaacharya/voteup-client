import { useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";

// material-ui
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useSnackbar } from 'notistack';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - LOGIN ||============================ //

import TokenService from "_services/token.service";
import { pages } from 'links';
import { getLogin } from 'view/site/service';

const schema = yup.object({
    code: yup.string().required("Email cannot be blank").min(6).max(6),
    password: yup.string().required("Password cannot be blank"),
});

const AuthVerify = () => {
    const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState({ new: false, confirm: false });
    const history = useHistory();
    const { handleSubmit, control, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
    });
    const handleClickShowPassword = (type) => {
        setShowPassword({ ...showPassword, [type]: !showPassword[type] });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const { enqueueSnackbar } = useSnackbar();

    const onSubmitHandler = async (fdata) => {
        await getLogin(fdata).then((res) => {
            if (res.flag == true) {
                enqueueSnackbar("Login success", {
                    variant: 'success',
                });
                TokenService.setUser({
                    ...res.data
                });
                history.push({
                    pathname: pages.HOME
                });
            } else {
                enqueueSnackbar("Invalid login detail", {
                    variant: 'error',
                });
            }
        });
    }

    return (
        <>
            <form noValidate onSubmit={handleSubmit(onSubmitHandler)}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <Controller
                                name="code"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <InputLabel htmlFor="email-login">Code</InputLabel>
                                            <OutlinedInput
                                                id="email-login"
                                                type="text"
                                                placeholder="Enter code"
                                                fullWidth
                                                {...field}
                                            // error={Boolean(fieldState.error)}
                                            />
                                            {fieldState.error && (
                                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                                    {fieldState.error?.message}
                                                </FormHelperText>
                                            )}
                                        </>
                                    )
                                }}
                            />

                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <Controller
                                name="password"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <InputLabel htmlFor="password-new">New Password</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                // error={Boolean(fieldState.error)}
                                                id="password-new"
                                                type={showPassword ? 'text' : 'password'}
                                                {...field}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={() => handleClickShowPassword('new')}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                            size="large"
                                                        >
                                                            {showPassword['new'] ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                placeholder="Enter new password"
                                            />
                                            {fieldState.error && (
                                                <FormHelperText error >
                                                    {fieldState.error?.message}
                                                </FormHelperText>
                                            )}

                                        </>
                                    )
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <Controller
                                name="confirm"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <InputLabel htmlFor="password-confirm">Confirm Password</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                // error={Boolean(fieldState.error)}
                                                id="password-confirm"
                                                type={showPassword ? 'text' : 'password'}
                                                {...field}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={() => handleClickShowPassword('confirm')}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                            size="large"
                                                        >
                                                            {showPassword['confirm'] ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                placeholder="Reenter password"
                                            />
                                            {fieldState.error && (
                                                <FormHelperText error >
                                                    {fieldState.error?.message}
                                                </FormHelperText>
                                            )}

                                        </>
                                    )
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <AnimateButton>
                            <Button
                                disableElevation
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </AnimateButton>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default AuthVerify;
