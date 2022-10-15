import React from 'react'
import {
  Box,
  alpha,
  Stack,
  lighten,
  styled,
  useTheme
} from '@mui/material';

import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import HeaderLogo from '../Logo';
import { pages } from 'links';
import { useLocation } from 'react-router-dom';
import GoBack from './Buttons/GoBack';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
`
);

function Header({ openDialog, setDialog }) {
  const theme = useTheme();
  const location = useLocation();
  console.log(location.pathname === pages.POST)
  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
              lighten(theme.colors.primary.main, 0.7),
              0.15
            )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
              theme.colors.alpha.black[100],
              0.2
            )}, 0px 5px 22px -4px ${alpha(
              theme.colors.alpha.black[100],
              0.1
            )}`
      }}
    >
      <Stack
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
        // alignItems="center"
        spacing={1}
      >
        <HeaderLogo sx={{ display: { xs: (location.pathname === pages.POST ? 'none' : 'block'), md: 'block' } }} to={pages.HOME} />
        <GoBack sx={{ display: { xs: (location.pathname === pages.POST ? 'block' : 'none'), md: 'none' } }} />
      </Stack>
      <Box display='flex' alignItems="center">
        <HeaderButtons openDialog={openDialog} setDialog={setDialog} />
        <HeaderUserbox sx={{ display: { sm: 'none', md: 'flex' } }} />
        {/* <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' }
          }}
        >
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box> */}
      </Box>
    </HeaderWrapper>
  );
}

export default (Header);
