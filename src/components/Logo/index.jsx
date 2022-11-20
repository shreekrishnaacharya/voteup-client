import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// project import
import Logo from './Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => (
    <Box sx={{ ...sx, position: 'absolute', top: 0 }}>
        <Link to={to}>
            <Logo />
        </Link>
    </Box>
);

LogoSection.propTypes = {
    sx: PropTypes.object,
    to: PropTypes.string
};

export default LogoSection;
