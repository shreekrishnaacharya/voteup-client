import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { pages } from 'links';
import FeedController from './feed';
function MainController() {
    return (
        <div key="MainController">
            <FeedController />
        </div >
    );
}

export default MainController;