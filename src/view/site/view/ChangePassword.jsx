import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from './AuthWrapper';
import { pages } from 'links';
import { Helmet } from 'react-helmet';
import AuthChangePassword from './auth-forms/AuthChangePassword';

// ================================|| LOGIN ||================================ //

const ChangePassword = () => (
    <AuthWrapper>
        <Helmet>
            <title>{`Change Password | Referendum 2.0`}</title>
        </Helmet>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Change Password</Typography>
                    <Typography component={Link} to={pages.LOGIN} variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Got your password?
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <AuthChangePassword />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default ChangePassword;
