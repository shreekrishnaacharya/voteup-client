import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { pages } from 'links';
import FeedController from './feed';
import ManagementUserProfile from './user/profile';
import ViewPost from './post/view/ViewPost';
function MainController() {
    return (
        <div key="MainController">
            <Route path={pages.PROFILE} component={ManagementUserProfile} />
            <Route path={pages.POST} component={ViewPost} />
            <Route exact path={pages.HOME} component={FeedController} />
        </div>
    );
}

export default MainController;