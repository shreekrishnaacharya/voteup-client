import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from './AuthWrapper';
import { pages } from 'links';
import { Helmet } from 'react-helmet';
import AuthForgot from './auth-forms/AuthForgot';

// ================================|| LOGIN ||================================ //

const ForgotPassword = () => (
    <AuthWrapper>
        <Helmet>
            <title>Forgot Password | Referendum 2.0</title>
        </Helmet>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h3">Forgot Password?</Typography>
            </Grid>
            <Grid item xs={12}>
                <AuthForgot />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default ForgotPassword;
