import StoreController from "view";
import Auth from "_base/Auth";
// import { loadProgressBar } from 'axios-progress-bar';
// import 'axios-progress-bar/dist/nprogress.css';
import ThemeProvider from './theme/ThemeProvider';
// loadProgressBar();

export default function App() {

  return (
    <ThemeProvider>
      <Auth>
        <StoreController key="StoreController" />
      </Auth>
    </ThemeProvider>
  );
}
