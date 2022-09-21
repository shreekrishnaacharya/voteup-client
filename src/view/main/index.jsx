import { Route, Switch } from 'react-router-dom';
import { pages } from 'links';
import FeedController from './feed';
import ManagementUserProfile from './user/profile';
import ViewPost from './post/view/ViewPost';
import { Container } from '@mui/material';
import Header from 'components/Header';
import { SidebarProvider } from 'contexts/SidebarContext';
import Status404 from 'view/pages/Status404';

function MainController() {
    return (
        <div key="MainController">
            <SidebarProvider>
                <Header />
                <Container sx={{ pt: 7, mb: 5 }} maxWidth="lg">
                    <Switch>
                        <Route path={pages.PROFILE} component={ManagementUserProfile} />
                        <Route path={pages.POST} component={ViewPost} />
                        <Route exact path={pages.HOME} component={FeedController} />
                        <Route path="*" component={Status404} />
                    </Switch>
                </Container>
            </SidebarProvider>
        </div>
    );
}

export default MainController;