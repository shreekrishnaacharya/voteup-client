import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import FirebaseRegister from './auth-forms/AuthRegister';
import AuthWrapper from './AuthWrapper';
import { pages } from 'links';
import { Helmet } from 'react-helmet';

// ================================|| REGISTER ||================================ //

const Register = () => (
    <AuthWrapper>
        <Helmet>
            <title>Register | Ventvoila</title>
            <meta property="description" content="Express your idea, agenda with your communitity. And land to a common ground with democratic voting" />
            <meta property="og:title" content={"Login | Ventvoila"} />
            <meta property="og:description" content={"Express your idea, agenda with your communitity. And land to a common ground with democratic voting"} />
        </Helmet>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Sign up</Typography>
                    <Typography component={Link} to={pages.LOGIN} variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Already have an account?
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <FirebaseRegister />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default Register;
