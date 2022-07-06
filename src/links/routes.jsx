import React from 'react';

import Methods from "_base/Methods";
import { pages } from "./pages";
const ContactsController = React.lazy(() => import('view/main/contact'));

const routes = [
  {
    name: "Contacts",
    key: "contact",
    route: pages.CONTACT_LIST,
    icon: <i className='ui address book icon'></i>,
    component: ContactsController,
    noCollapse: true,
    rid: "sales",
  },
  {
    type: "collapse",
    name: "Logout",
    key: "sign-out",
    route: "/logout",
    icon: <i className='ui sign-in icon'></i>,
    component: () => (<Methods logout={true} />),
    noCollapse: false,
  }
];

export default routes;
