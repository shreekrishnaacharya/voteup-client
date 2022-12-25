import { Route, Switch } from 'react-router-dom';
import { pages } from "links/pages";
import Footer from 'components/Footer';
import { Box, Grid } from '@mui/material';
import Logo from 'components/Logo';
import PageTerms from './view/Terms';
import PageBlog from './view/PageBlog';
import PagePrivacy from './view/PagePrivacy';
import PageFAQ from './view/PageFAQ';
import PageRules from './view/PageRules';
import PageAbout from './view/Aboutus';
import { _GLOBAL } from 'links';

function PagesController() {
    const { mini } = _GLOBAL
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
                <Grid item xs={12} sx={{ px: 2, backgroundColor: "#fff" }} >
                    <Logo to={pages.HOME} />
                </Grid>
                <Grid item xs={12} sx={{ my: 7, mx: mini ? 2 : 6 }}>
                    <Switch>
                        <Route exact path={pages.PRIVACY} component={PagePrivacy} />
                        <Route exact path={pages.FAQ} component={PageFAQ} />
                        <Route exact path={pages.BLOG} component={PageBlog} />
                        <Route exact path={pages.TERMS} component={PageTerms} />
                        <Route exact path={pages.RULES} component={PageRules} />
                        <Route exact path={pages.ABOUT} component={PageAbout} />
                        <Footer />
                    </Switch>
                </Grid>
            </Grid>
            <Footer />
        </Box>
    );
}

export default PagesController;