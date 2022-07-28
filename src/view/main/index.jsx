import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { pages } from 'links';
import FeedController from './feed';
import ManagementUserProfile from './user/profile';
function MainController() {
    return (
        <div key="MainController">
            <Route path={pages.PROFILE} component={ManagementUserProfile} />
            <Route exact path={pages.HOME} component={FeedController} />
        </div>
    );
}

export default MainController;