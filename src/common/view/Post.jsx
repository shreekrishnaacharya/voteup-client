import {
    Box,
    CardMedia,
    Typography,
    Card,
    CardHeader,
    Divider,
    Avatar,
    IconButton,
    Button,
    CardActions,
    Link,
    styled,
    Stack,
    Menu,
    MenuItem
} from '@mui/material';

import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import Text from 'components/Text';
import { ThumbDownAltTwoTone } from '@mui/icons-material';
import ReactTimeAgo from 'react-time-ago'
import React, { useEffect, useState } from 'react';
import { actionUpdate } from "../service";
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';

const ActionType = {
    DISLIKE: 0,
    LIKE: 1
}
const CardActionsWrapper = styled(CardActions)(
    ({ theme }) => `
       background: ${theme.colors.alpha.black[5]};
       padding: ${theme.spacing(3)};
  `
);


function Post({ post, onMenu, userModel, viewPost }) {
    // console.log(post)
    const [paction, setPaction] = useState({
        up_vote: post.up_vote,
        down_vote: post.down_vote,
        vtype: post.vtype,
        review: post.review
    });
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleOptionClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleOptionClose = () => {
        setAnchorEl(null);
    };
    const handleOptionAction = (type) => {
        onMenu(post._id, type)
        setAnchorEl(null);
    }
    const updateAction = (type) => {
        actionUpdate(post._id, type).then(e => {
            if (e.flag) {
                setPaction(e.data);
            }
        })
    }

    useEffect(() => {
        setPaction(post);
    }, [post]);


    let tagsList = [];
    if (post.tags !== null) {
        tagsList = post.tags.split(",").map(hash => {
            return <><Link href="#" underline="hover">
                {hash}
            </Link>{" "}</>
        })
    }

    return (
        <Box mb={2}>
            <Card>
                <CardHeader
                    avatar={<Avatar src={post.user_dp} />}
                    action={
                        <>
                            <IconButton
                                color="primary"
                                onClick={handleOptionClick}
                            >
                                <MoreHorizTwoToneIcon fontSize="medium" />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleOptionClose}
                            >
                                {post.userid === userModel._id ? (
                                    [
                                        <MenuItem key={'edit'} onClick={() => { handleOptionAction(1) }}>Edit</MenuItem>,
                                        <MenuItem key={'delete'} onClick={() => { handleOptionAction(2) }}>Delete</MenuItem>
                                    ]
                                ) : (
                                    <MenuItem onClick={() => { handleOptionAction(0) }}>Report</MenuItem>
                                )}
                            </Menu>
                        </>
                    }
                    titleTypographyProps={{ variant: 'h4' }}
                    subheaderTypographyProps={{ variant: 'subtitle2' }}
                    title={post.username}
                    subheader={
                        <>
                            {tagsList}
                        </>
                    }
                />
                <Box px={3} pb={2}>
                    <Typography variant="h4" fontWeight="normal">
                        {post.post_detail}
                    </Typography>
                </Box>
                {/* <CardMedia
                    sx={{ minHeight: 280 }}
                    image="/static/images/placeholders/covers/6.jpg"
                    title="Card Cover"
                /> */}
                <Box p={1}>
                    <Typography variant="subtitle2">
                        <ReactTimeAgo date={new Date(post.create_at)} locale="en-US" />
                    </Typography>
                </Box>
                <Divider />
                <CardActionsWrapper
                    sx={{
                        display: { xs: 'block', md: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        <Button
                            onClick={() => { updateAction(ActionType.LIKE) }}
                            color='primary'
                            startIcon={<ThumbUpAltTwoToneIcon />}
                            variant={paction.vtype == 1 ? "contained" : "outlined"}
                        >
                            Like
                        </Button>
                        <Button
                            onClick={() => { updateAction(ActionType.DISLIKE) }}
                            color='error'
                            startIcon={<ThumbDownAltTwoTone />}
                            variant={paction.vtype == 0 ? "contained" : "outlined"}
                        >
                            Dislike
                        </Button>
                        <Button
                            startIcon={<CommentTwoToneIcon />}
                            variant="outlined"
                            sx={{ mx: 2 }}
                            onClick={() => {
                                viewPost(post._id)
                            }}
                        >
                            Review
                        </Button>
                        <Button startIcon={<ShareTwoToneIcon />} variant="outlined">
                            Share
                        </Button>
                    </Stack>
                    <Box sx={{ mt: { xs: 2, md: 0 } }}>
                        <Typography variant="subtitle2" component="span">
                            <Text color="info">
                                <b>{paction.review}</b>
                            </Text>{' '}
                            Review{' | '}
                            <Text color="success">
                                <b>{paction.up_vote}</b>
                            </Text>{' '}
                            Likes{' | '}
                            <Text color="error">
                                <b>{paction.down_vote}</b>
                            </Text>{' '}
                            Dislike
                        </Typography>
                    </Box>
                </CardActionsWrapper>
            </Card>
        </Box >
    );
}

export default Post;  