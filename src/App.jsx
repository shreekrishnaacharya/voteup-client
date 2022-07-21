import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import StoreController from "view";
import Auth from "_base/Auth";
import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';
import ThemeCustomization from 'themes';
import ThemeProvider from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';
loadProgressBar();

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return (
    <ThemeProvider>
      {/* <Auth> */}
        <StoreController key="StoreController" />
      {/* </Auth> */}
    </ThemeProvider>
  );
}
