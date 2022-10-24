import { Box, Link as RLink, Typography, styled } from '@mui/material';
import { pages } from 'links';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Footer({ mini }) {
  return (
    <Box sx={{
      bottom: 0,
      width: '100%',
      position: Boolean(mini) ? 'relative' : 'absolute',
      // background: Boolean(mini) ? 'transparent' : '#f9f9f991',
      height: '2.5rem',

    }}>
      <Box
        px={2}
        py={1}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
      >
        <Box display={'flex'} gap={2}>
          <Typography
            sx={{
              display: Boolean(mini) ? 'none' : 'block'
            }}
          >
            &copy; 2022 - Referendum 2.0
          </Typography>
          <Typography
            sx={{
              fontSize: Boolean(mini) ? '10px' : '13px'
            }}
          >
            <Link
              to={pages.PRIVACY}
              rel="Privacy Policy"
            >
              Privacy Policy
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: Boolean(mini) ? '10px' : '13px'
            }}
          >
            <Link
              to={pages.RULES}
              rel="Terms of Use"
            >
              ToU
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: Boolean(mini) ? '10px' : '13px'
            }}
          >
            <Link
              to={pages.TERMS}
              rel="Terms and conditions"
            >
              ToS
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: Boolean(mini) ? '10px' : '13px'
            }}
          >
            <Link
              to={pages.FAQ}
              rel="Frequently asked question"
            >
              FAQ
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: Boolean(mini) ? '10px' : '13px'
            }}
          >
            <Link
              to={pages.BLOG}
              rel="Blog"
            >
              Blog
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: '13px',
              display: Boolean(mini) ? 'none' : 'block'
            }}
          >
            <Link
              to={pages.HOME}
              rel="Home"
            >
              Home
            </Link>
          </Typography>
        </Box>
        <Typography
          sx={{
            pt: { xs: 2, md: 0 },
            fontSize: Boolean(mini) ? '10px' : '13px',
            display: Boolean(mini) ? 'none' : 'block'
          }}
        >
          Crafted by{' '}
          <RLink
            href="https://www.linkedin.com/in/shree-krishna-acharya-0a10a514b/"
            rel="sksharma72000@gmail.com"
            target="_blank"
            sx={{ color: '#fff', textShadow: '0 3px 5px rgba(0, 0, 0, 0.5)' }}
          >
            Shree Krishna Acharya
          </RLink>
        </Typography>
      </Box>
    </Box>
  );
}
Footer.defaultProps = {
  mini: false,
};
Footer.propTypes = {
  mini: PropTypes.bool
};
export default Footer;