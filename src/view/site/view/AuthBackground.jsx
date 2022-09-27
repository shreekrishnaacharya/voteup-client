// material-ui
import { Box } from '@mui/material';

// import background from 'assets/images/background.png'
import background from 'assets/images/bg.jpg'
// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
    return (
        <Box sx={{
            position: 'fixed',
            filter: 'blur(5px)',
            zIndex: -1,
            width: '100%',
            height: '100%',
            background: `url(${background}) no-repeat center center fixed`,
            backgroundSize: 'cover'
        }}>
        </Box>
    );
};

export default AuthBackground;
