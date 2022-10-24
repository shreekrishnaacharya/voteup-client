import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    Select,
    MenuItem
} from '@mui/material';

// third party
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useSnackbar } from 'notistack';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { getSignup } from 'view/site/service';
import { pages } from 'links';
import countryList from 'assets/json/country'

const schema = yup.object({
    fname: yup.string().required("First name cannot be blank"),
    lname: yup.string().required("Last name cannot be blank"),
    email: yup.string().required("Email cannot be blank").email(),
    contact: yup.string().required("Phone cannot be blank"),
    country: yup.string().required("Country cannot be blank"),
    temp_password: yup.string().required("Password cannot be blank"),
});

const AuthRegister = () => {
    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const { enqueueSnackbar } = useSnackbar();

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const { handleSubmit, control, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
    });

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };


    useEffect(() => {
        changePassword('');
    }, []);

    const onSubmitHandler = async (fdata) => {
        await getSignup(fdata).then((res) => {
            if (res.flag == true) {
                enqueueSnackbar("Signup success", {
                    variant: 'success',
                });
                history.push({
                    pathname: pages.LOGIN
                });
            } else {
                enqueueSnackbar("Signup failed", {
                    variant: 'error',
                });
            }
        });
    }
    console.log(countryList)
    return (
        <>
            <form noValidate onSubmit={handleSubmit(onSubmitHandler)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Controller
                                name="fname"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <InputLabel htmlFor="firstname-signup">First Name*</InputLabel>
                                            <OutlinedInput
                                                {...field}
                                                id="firstname-login"
                                                type="firstname"
                                                fullWidth
                                                error={Boolean(fieldState.error)}
                                            />
                                            {fieldState.error && (
                                                <FormHelperText error id="helper-text-firstname-signup">
                                                    {fieldState.error.message}
                                                </FormHelperText>
                                            )}

                                        </>
                                    )
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Controller
                                name="lname"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                                            <OutlinedInput
                                                {...field}
                                                fullWidth
                                                error={Boolean(fieldState.error)}
                                                id="lastname-signup"
                                                inputProps={{}}
                                            />
                                            {fieldState.error && (
                                                <FormHelperText error>
                                                    {fieldState.error.message}
                                                </FormHelperText>
                                            )}

                                        </>
                                    )
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Controller
                                name="contact"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <InputLabel htmlFor="phone-signup">Phone*</InputLabel>
                                            <OutlinedInput
                                                {...field}
                                                fullWidth
                                                error={Boolean(fieldState.error)}
                                                id="phone-signup"
                                                inputProps={{}}
                                            />
                                            {fieldState.error && (
                                                <FormHelperText error >
                                                    {fieldState.error.message}
                                                </FormHelperText>
                                            )}

                                        </>
                                    )
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Controller
                                name="country"
                                defaultValue="Nepal"
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <InputLabel htmlFor="country-login">Country*</InputLabel>
                                            <Select
                                                {...field}
                                                labelId="select-label"
                                                id="country-login"
                                            >
                                                {Object.values(countryList).map(e => {
                                                    return <MenuItem key={e} value={e}>{e}</MenuItem>
                                                })}
                                            </Select>
                                            {fieldState.error && (
                                                <FormHelperText error>
                                                    {fieldState.error.message}
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
                                name="email"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                                            <OutlinedInput
                                                {...field}
                                                type={'email'}
                                                fullWidth
                                                error={Boolean(fieldState.error)}
                                                id="email-login"
                                                inputProps={{}}
                                            />
                                            {fieldState.error && (
                                                <FormHelperText error>
                                                    {fieldState.error.message}
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
                                name="temp_password"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <InputLabel htmlFor="password-signup">Password</InputLabel>
                                            <OutlinedInput
                                                {...field}
                                                fullWidth
                                                error={Boolean(fieldState.error)}
                                                id="password-signup"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                            size="large"
                                                        >
                                                            {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                placeholder="******"
                                                inputProps={{}}
                                            />
                                            {fieldState.error && (
                                                <FormHelperText error>
                                                    {fieldState.error.message}
                                                </FormHelperText>
                                            )}
                                        </>
                                    )
                                }}
                            />
                        </Stack>

                        <FormControl fullWidth sx={{ mt: 2 }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" fontSize="0.75rem">
                                        {level?.label}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body2">
                            By Signing up, you agree to our &nbsp;
                            <Link variant="subtitle2" component={RouterLink} to={pages.TERMS}>
                                Terms of Service
                            </Link>
                            &nbsp; and &nbsp;
                            <Link variant="subtitle2" component={RouterLink} to={pages.PRIVACY}>
                                Privacy Policy
                            </Link>
                        </Typography>
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
                                Create Account
                            </Button>
                        </AnimateButton>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default AuthRegister;
