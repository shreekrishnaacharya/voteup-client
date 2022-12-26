import { Route, Switch, useLocation } from 'react-router-dom';
import { pages, otherPages } from "links/pages";
import Footer from 'components/Footer';
import { Box, Grid } from '@mui/material';
import PageTerms from './view/Terms';
import PageBlog from './view/PageBlog';
import PagePrivacy from './view/PagePrivacy';
import PageFAQ from './view/PageFAQ';
import PageRules from './view/PageRules';
import GoBack from 'components/Header/Buttons/GoBack'
import HeaderLogo from 'components/Logo'
import { _GLOBAL } from 'links';

function PagesController() {
    const { mini } = _GLOBAL
    const location = useLocation();
    let title = "";
    Object.keys(otherPages).forEach(e => {
        if (otherPages[e] == location.pathname) {
            title = e;
        }
    })

    console.log(location.pathname == pages.RULES);
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
                    <GoBack goto={title} sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }} />
                    <HeaderLogo sx={{ display: { xs: 'none', md: 'block' } }} to={pages.HOME} />
                </Grid>
                <Grid item xs={12} sx={{ my: 7, mx: mini ? 2 : 6 }}>
                    <Switch>
                        <Route exact path={pages.PRIVACY} component={PagePrivacy} />
                        <Route exact path={pages.FAQ} component={PageFAQ} />
                        <Route exact path={pages.BLOG} component={PageBlog} />
                        <Route exact path={pages.TERMS} component={PageTerms} />
                        <Route exact path={pages.RULES} component={PageRules} />
                        <Footer />
                    </Switch>
                </Grid>
            </Grid>
            <Footer />
        </Box>
    );
}

export default PagesController;