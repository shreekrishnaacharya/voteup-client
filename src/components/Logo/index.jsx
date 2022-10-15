import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// project import
import Logo from './Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => (
    <Link to={to} sx={{ ...sx, position: 'absolute', top: 0 }}>
        <Logo />
    </Link>
);

LogoSection.propTypes = {
    sx: PropTypes.object,
    to: PropTypes.string
};

export default LogoSection;
