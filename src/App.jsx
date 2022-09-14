import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import StoreController from "view";
import Auth from "_base/Auth";
import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';
import ThemeProvider from './theme/ThemeProvider';
loadProgressBar();

export default function App() {
  const { pathname } = useLocation();

  // useEffect(() => {
  //   if (pathname == "/") {
  //     const pos = localStorage.getItem("scrollPos");
  //     console.log(pos)
  //     document.documentElement.scrollTop = pos;
  //     document.scrollingElement.scrollTop = pos;
  //   } else {
  //     document.documentElement.scrollTop = 0;
  //     document.scrollingElement.scrollTop = 0;
  //   }
  // }, [pathname]);

  return (
    <ThemeProvider>
      <Auth>
        <StoreController key="StoreController" />
      </Auth>
    </ThemeProvider>
  );
}
