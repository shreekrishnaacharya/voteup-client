import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from 'notistack';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    Button,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
} from '@mui/material';

import { Link, useHistory } from 'react-router-dom';
import { pages } from "links/pages";

import { getUserByEmail } from '../../service';
// project import
import AnimateButton from 'components/@extended/AnimateButton';

const schema = yup.object({
    email: yup.string().required("Email cannot be blank").email()
});

const AuthForgot = () => {

    const { handleSubmit, control, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
    });
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();


    const onSubmitHandler = async (fdata) => {
        await getUserByEmail(fdata).then(({ flag, data }) => {
            if (flag == true) {
                enqueueSnackbar("Email send success. Check your email for password reset code", {
                    variant: 'success',
                });
                history.push({
                    pathname: pages.NEW_PASSWORD
                });
            } else {
                enqueueSnackbar(data.message, {
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
                                name="email"
                                defaultValue=""
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <InputLabel htmlFor="email-login">Email Address</InputLabel>
                                            <OutlinedInput
                                                id="email-login"
                                                type="email"
                                                placeholder="Enter email address"
                                                fullWidth
                                                {...field}
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
                        <Typography component={Link} to={pages.LOGIN} variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                            Got your password?
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
                                Submit
                            </Button>
                        </AnimateButton>
                    </Grid>
                </Grid>
            </form>
        </>
    );

}

export default AuthForgot;