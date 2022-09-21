import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { pages } from "links/pages";
import { CircularProgress, Stack } from '@mui/material';
const SiteController = React.lazy(() => import('view/site'));
const MainController = React.lazy(() => import('view/main'));
function StoreController() {
    return (
        <Suspense fallback={<Stack spacing={2} direction="row">
            <CircularProgress color="success" />
        </Stack>}>
            <Switch>
                <Route path={pages.GUEST} component={SiteController} />
                <Route path={pages.HOME} component={MainController} />
            </Switch>
        </Suspense>
    );
}

export default StoreController;