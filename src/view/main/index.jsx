import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { pages } from 'links';
import FeedController from './feed';
import ManagementUserProfile from './user/profile';
import ViewPost from './post/view/ViewPost';
import { Container } from '@mui/material';
import Header from 'components/Header';

function MainController() {
    return (
        <div key="MainController">
            <Header />
            <Container sx={{ pt: 7, mb: 5 }} maxWidth="lg">
                <Route path={pages.PROFILE} component={ManagementUserProfile} />
                <Route path={pages.POST} component={ViewPost} />
                <Route exact path={pages.HOME} component={FeedController} />
            </Container>
        </div>
    );
}

export default MainController;