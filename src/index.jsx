import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import App from "App";
import store from "./redux/store";
import { SnackbarProvider } from 'notistack';
import TokenService from "_services/token.service";
TokenService.store = store;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <SnackbarProvider maxSnack={5}>
          <App />
        </SnackbarProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
