import { Route, Switch } from 'react-router-dom';
import { pages } from "links/pages";
import Footer from 'components/Footer';
import { Box, Grid } from '@mui/material';
import Logo from 'components/Logo';
import PageTerms from './view/Terms';
import PageBlog from './view/PageBlog';
import PagePrivacy from './view/PagePrivacy';
import PageFAQ from './view/PageFAQ';

function PagesController() {
    return (
        <Box>
            <Grid
                container
                direction="column"
                justifyContent="flex-end"
                sx={{
                    minHeight: '60vh'
                }}
            >
                <Grid item xs={12} sx={{ px: 2, py: 3.5, backgroundColor: "#fff" }} >
                    <Logo to={pages.HOME} />
                </Grid>
                <Grid item xs={12} sx={{ my: 2, mx: 6 }}>
                    <Switch>
                        <Route exact path={pages.PRIVACY} component={PagePrivacy} />
                        <Route exact path={pages.FAQ} component={PageFAQ} />
                        <Route exact path={pages.BLOG} component={PageBlog} />
                        <Route exact path={pages.TERMS} component={PageTerms} />
                        <Footer />
                    </Switch>
                </Grid>
            </Grid>
            <Footer />
        </Box>
    );
}

export default PagesController;