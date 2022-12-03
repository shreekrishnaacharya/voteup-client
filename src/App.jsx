import StoreController from "view";
import Auth from "_base/Auth";
// import { loadProgressBar } from 'axios-progress-bar';
// import 'axios-progress-bar/dist/nprogress.css';
import ThemeProvider from './theme/ThemeProvider';
// loadProgressBar();
import React, { useEffect } from "react";
// import { Plugins, Capacitor } from "@capacitor/core";
import { pages } from "links";

export default function App() {
  // useEffect(() => {
  //   if (Capacitor.isNative) {
  //     Plugins.App.addListener("backButton", (e) => {
  //       if (window.location.pathname === pages.HOME) {
  //         // Show A Confirm Box For User to exit app or not
  //         let ans = window.confirm("Are you sure");
  //         if (ans) {
  //           Plugins.App.exitApp();
  //         }
  //       } else if (window.location.pathname === pages.HOME || window.location.pathname === pages.LOGIN) {
  //         // Show A Confirm Box For User to exit app or not
  //         let ans = window.confirm("Are you sure");
  //         if (ans) {
  //           Plugins.App.exitApp();
  //         }
  //       }
  //     });
  //   }
  // }, []);
  return (
    <ThemeProvider>
      <Auth>
        <StoreController key="StoreController" />
      </Auth>
    </ThemeProvider>
  );
}
