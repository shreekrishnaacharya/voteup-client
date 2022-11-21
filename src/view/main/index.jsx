import { Route, Switch } from 'react-router-dom';
import { pages } from 'links';
import FeedController from './feed';
import ManagementUserProfile from './user/profile';
import ViewPost from './post/view/ViewPost';
import { Box } from '@mui/material';
import Header from 'components/Header';
import Status404 from 'view/pages/view/Status404';
import Add from 'common/view/Add';
import { useState } from 'react';

function MainController() {
    const [openDialog, setDialog] = useState(false)
    return (
        <div key="MainController">
            <Header openDialog={openDialog} setDialog={setDialog} />
            <Box sx={{ pt: 7, mb: 5, px: 1 }}>
                <Switch>
                    <Route path={pages.PROFILE} component={ManagementUserProfile} />
                    <Route path={pages.POST} component={ViewPost} />
                    <Route exact path={pages.HOME} component={FeedController} />
                    <Route path="*" component={Status404} />
                </Switch>
            </Box>
            <Add setDialog={setDialog} />
        </div>
    );
}

export default MainController;