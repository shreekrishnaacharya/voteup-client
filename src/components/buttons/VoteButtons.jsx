import { LoadingButton } from '@mui/lab';
import { ThumbUpAltTwoTone } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useEffect } from 'react';

const LoaderIndicator = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    backgroundColor: '#9880ff',
    color: '#9880ff',
    animation: 'dotFlashing 1s infinite linear alternate',
    '&:before, &:after': {
        content: "''",
        display: 'inline-block',
        position: 'absolute',
        top: 0,
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        backgroundColor: '#9880ff',
        color: '#9880ff',
        animation: 'dotFlashing 1s infinite alternate',
    },
    animationDelay: '0.5s',
    '&:after': {
        left: '15px',
        animationDelay: '1s'
    },
    '&:before': {
        left: '-15px',
        animationDelay: '0s'
    },



    '@keyframes dotFlashing': {
        '0%': {
            backgroundColor: '#9880ff'
        },
        '50%': {
            backgroundColor: '#ebe6ff'
        },
        '100%': {
            backgroundColor: '#ebe6ff'
        }
    }
}));

const VoteButton = ({ hasVote, onClick, ...rest }) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(false)
    }, [hasVote])
    return <LoadingButton
        onClick={() => {
            onClick()
            setLoading(false)
        }}
        color={hasVote == 1 ? 'primary' : 'info'}
        startIcon={<ThumbUpAltTwoTone />}
        variant={hasVote == 0 ? 'outlined' : 'contained'}
        loadingIndicator={<LoaderIndicator />}
        loading={loading}
        {...rest}
    >
        {hasVote == 0 ? 'Vote' : 'Voted'}
    </LoadingButton>
}

export default VoteButton;