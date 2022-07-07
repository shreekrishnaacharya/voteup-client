import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project import
import Logo from './Logo';
import { pages } from 'links';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => (
    <ButtonBase disableRipple component={Link} to={to} sx={sx}>
        <Logo />
    </ButtonBase>
);

LogoSection.propTypes = {
    sx: PropTypes.object,
    to: PropTypes.string
};

export default LogoSection;
