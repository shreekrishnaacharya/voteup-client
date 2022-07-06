import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Navbar } from 'layouts/Navbar/Navbar';
import ContactController from './contact';
import { Features, Pricing, Testimonials, TryFree } from './pages';
import { pages } from 'links';
function MainController() {
    console.log("i am main controller");

    return (
        <div key="MainController">
            <Navbar />
            <Suspense fallback={
                <div class="ui segment">
                    <div class="ui active inverted dimmer">
                        <div class="ui text loader">Loading</div>
                    </div>
                    <p></p>
                </div>
            }>
                <Route path={pages.CONTACT_LIST} component={ContactController} />
                <Route exact path={'/features'} component={Features} />
                <Route exact path={'/pricing'} component={Pricing} />
                <Route exact path={'/testimonials'} component={Testimonials} />
                <Route exact path={'/tryfree'} component={TryFree} />
            </Suspense>
        </div >
    );
}

export default MainController;