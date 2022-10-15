import { Box } from '@mui/material';
import HeaderSearch from './Search/index';

function HeaderButtons({ ...rest }) {
  return (
    <Box sx={{ mr: 1, display: 'flex' }}>
      <HeaderSearch {...rest} />
      {/* <Box sx={{ mx: 0.5 }} component="span">
        <HeaderNotifications />
      </Box> */}
    </Box>
  );
}

export default HeaderButtons;
