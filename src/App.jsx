import StoreController from "view";
import Auth from "_base/Auth";
// import { loadProgressBar } from 'axios-progress-bar';
// import 'axios-progress-bar/dist/nprogress.css';
import ThemeProvider from './theme/ThemeProvider';
// loadProgressBar();
import React, { useEffect, useState } from "react";
import { App as cApp } from "@capacitor/app";
import { pages } from "links";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Offline from "Offline";
import { _GLOBAL } from "links";


export default function App() {
  const history = useHistory()
  const { mini } = _GLOBAL
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    cApp.addListener('backButton', (ev) => {
      ev.detail.register(10, () => {
        if (window.location.pathname === pages.HOME || window.location.pathname === pages.LOGIN) {
          // Show A Confirm Box For User to exit app or not
          cApp.exitApp();
        } else {
          history.goBack();
        }
      });
    });
  }, []);


  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener('online', handleStatusChange);

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);

  if (mini && !isOnline) {
    return <Offline />
  }
  return (
    <ThemeProvider>
      <Auth>
        <StoreController key="StoreController" />
      </Auth>
    </ThemeProvider>
  );
}
