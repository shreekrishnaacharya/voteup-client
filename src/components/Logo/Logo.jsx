// material-ui
import { useTheme } from '@mui/material/styles';

import logo from 'assets/images/logo.png'
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    return (
        <img src={logo} alt="Referendum 2.0" width="221" />
    );
};

export default Logo;
