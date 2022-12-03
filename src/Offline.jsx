import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from 'components/Logo/Logo';
import { ButtonGroup, Typography } from '@mui/material';
import WifiOffIcon from '@mui/icons-material/WifiOff';

export default function Offline() {

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box>
                    <Logo />
                </Box>
                <Box mt={5} mb={5}>
                    <Avatar >
                        <WifiOffIcon />
                    </Avatar>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant='h2'>Offline</Typography>
                    <Typography>Looks like your are offline. Please check your internet connection</Typography>
                    <Typography>And</Typography>
                </Box>
                <Box mt={3}>
                    <Button variant="outlined" onClick={() => window.location.reload()}>Try Again</Button>
                </Box>
            </Box>
        </Container>
    );
}
