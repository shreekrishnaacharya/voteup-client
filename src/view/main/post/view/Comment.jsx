import {
    Box,
    Typography,
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardActions,
    styled,
    Stack,
    Grid,
    Button,
} from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LaunchIcon from '@mui/icons-material/Launch';
import { Delete, Info } from '@mui/icons-material';
import ReactTimeAgo from 'react-time-ago'
import React from 'react';
import VoteButton from 'components/buttons/VoteButtons';
import Ranking from 'components/Ranking';
import Text from 'components/Text';
import { StatusCode, StatusList } from "links";
import { CopyToClipboard } from '_services';
import { Link } from 'react-router-dom';
import { getDownload } from '_services';
import { ICONS_FONT } from 'links';
import { TEXT_FONT } from 'links';

const CardActionsWrapper = styled(CardActions)(
    ({ theme }) => `
       background: ${theme.colors.alpha.black[5]};
       padding: ${theme.spacing(3)};
  `
);


function Comment({ comment, post, onVote, setReport, setConfirm, userModel, toaster }) {
    const handleOptionAction = (type) => {
        if (type == 0) {
            setReport({ postid: comment._id, open: true })
        } else if (type == 2) {
            setConfirm({ postid: comment._id, open: true })
        }
    }
    return (
        <Box mb={1}>
            <Card>
                <CardHeader
                    avatar={comment.statusCode == StatusCode.REVIEW ? <Avatar src={comment.user_dp} /> : <></>}
                    action={
                        <>
                            {comment.statusCode == StatusCode.REVIEW && (
                                <>
                                    {comment.userid === userModel._id ? (
                                        <IconButton
                                            color="error"
                                            onClick={() => {
                                                handleOptionAction(2)
                                            }}
                                        >
                                            <Delete fontSize="medium" />
                                        </IconButton>
                                    ) : (
                                        <IconButton
                                            color="info"
                                            onClick={() => {
                                                handleOptionAction(0)
                                            }}
                                        >
                                            <Info fontSize="medium" />
                                        </IconButton>
                                    )}
                                </>
                            )}
                        </>
                    }
                    titleTypographyProps={{ variant: 'h5' }}
                    subheaderTypographyProps={{ variant: 'subtitle2' }}
                    title={comment.statusCode == StatusCode.REVIEW ? comment.username : ""}
                />
                <Box px={2} pb={1}>
                    <Typography variant="h5" fontWeight="normal">
                        {comment.post_detail}
                    </Typography>
                </Box>
                {/* <Box px={2}>
                    <Typography variant="subtitle2">
                        <ReactTimeAgo date={new Date(comment.create_at)} locale="en-US" />
                    </Typography>
                </Box> */}
                <CardActionsWrapper
                    sx={{
                        display: { xs: 'block', md: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Grid
                        container
                        direction={'row'}
                        spacing={1}
                        justifyContent="space-between"
                    >
                        <Grid item xl={6} >
                            <Stack direction="row" spacing={1} justifyContent="space-between">
                                {post.statusCode == StatusCode.VOTING && (
                                    <VoteButton post={comment} size='small' onClick={onVote} hasVote={comment.hasVote} />
                                )}
                                <Button
                                    startIcon={<ShareTwoToneIcon />}
                                    variant="outlined"
                                    size='small'
                                    onClick={() => {
                                        CopyToClipboard(comment.link)
                                        toaster('Link copied!!!')
                                    }}
                                >
                                    Share
                                </Button>
                                {post.ptype == 1 && (
                                    <Button
                                        component={Link}
                                        to={"post?id=" + comment.parent_id}
                                        startIcon={<LaunchIcon />}
                                        variant="outlined"
                                        size='small'
                                        color='info'
                                    >
                                        Open Main Post
                                    </Button>
                                )}
                            </Stack>
                        </Grid>
                        <Grid item xl={6} >
                            <Box sx={{ mt: { xs: 1, md: 0 } }}>
                                <Box
                                    component={'div'}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        fontSize: TEXT_FONT
                                    }}>
                                    {/* {post.statusCode == 1 && (
                                        <Text
                                            sx={{ display: 'flex', mr: 1 }}
                                            color={StatusList[comment.statusCode].color}
                                        >
                                            {StatusList[comment.statusCode].icon}{comment.status}
                                        </Text>
                                    )} */}
                                    {post.statusCode > StatusCode.VOTING && (
                                        <>
                                            <Text
                                                sx={{ display: 'flex', mr: 1 }}
                                                color={StatusList[comment.statusCode].color}
                                            >
                                                {StatusList[comment.statusCode].icon}&nbsp;{comment.status}
                                            </Text>{'|'}
                                            <Text
                                                sx={{ display: 'flex', mx: 1 }}
                                            >
                                                <ThumbUpIcon sx={{ fontSize: ICONS_FONT }} />&nbsp;{comment.votes}
                                            </Text>{'|'}
                                            <Ranking sx={{ mx: 1 }} voters={post.tot_votes} votes={comment.votes} />
                                            {
                                                comment.statusCode == StatusCode.ACCEPTANCE && (
                                                    <>
                                                        {'|'}
                                                        <Box
                                                            component={'a'}
                                                            sx={{ textDecoration: 'none', color: '#6E759F', ml: 0.5, mt: '4px' }}
                                                            href={post.dlink}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                getDownload(post.dlink)
                                                            }}
                                                        >
                                                            <DownloadForOfflineIcon sx={{ fontSize: ICONS_FONT }} />
                                                        </Box>
                                                    </>
                                                )
                                            }
                                        </>
                                    )}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </CardActionsWrapper>
            </Card>
        </Box >
    );
}

export default Comment;