import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { pages } from "links/pages";
import { CircularProgress, Stack } from '@mui/material';
const SiteController = React.lazy(() => import('view/site'));
const MainController = React.lazy(() => import('view/main'));
const PagesController = React.lazy(() => import('view/pages'));
function StoreController() {
    return (
        <Suspense fallback={<Stack spacing={2} direction="row">
            <CircularProgress color="success" />
        </Stack>}>
            <div style={{ position: 'relative', 'minHeight': '100vh', paddingBottom: '2.5rem' }}>
                <Switch>
                    <Route path={pages.GUEST} component={SiteController} />
                    <Route path={pages.PAGES} component={PagesController} />
                    <Route path={pages.HOME} component={MainController} />
                </Switch>
            </div>
        </Suspense>
    );
}

export default StoreController;