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
    Stack
} from '@mui/material';

import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import Text from 'components/Text';
import { ThumbDownAltTwoTone } from '@mui/icons-material';
import ReactTimeAgo from 'react-time-ago'

const CardActionsWrapper = styled(CardActions)(
    ({ theme }) => `
       background: ${theme.colors.alpha.black[5]};
       padding: ${theme.spacing(3)};
  `
);


function Post({ post }) {

    let tagsList = [];
    if (post.tags !== null) {
        tagsList = post.tags.split(",").map(hash => {
            return <><Link href="#" underline="hover">
                {hash}
            </Link>{" "}</>
        })
    }

    return (
        <Box p={{ xs: 0, md: 2 }}>
            <Card>
                <CardHeader
                    avatar={<Avatar src="/static/images/avatars/5.jpg" />}
                    action={
                        <IconButton color="primary">
                            <MoreHorizTwoToneIcon fontSize="medium" />
                        </IconButton>
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
                        <Button color='primary' startIcon={<ThumbUpAltTwoToneIcon />} variant={post.vtype == 1 ? "contained" : "outlined"}>
                            Like
                        </Button>
                        <Button color='error' startIcon={<ThumbDownAltTwoTone />} variant={post.vtype == 0 ? "contained" : "outlined"}>
                            Dislike
                        </Button>
                        <Button startIcon={<ShareTwoToneIcon />} variant="outlined">
                            Share
                        </Button>
                    </Stack>
                    <Box sx={{ mt: { xs: 2, md: 0 } }}>
                        <Typography variant="subtitle2" component="span">
                            <Text color="success">
                                <b>{post.up_vote}</b>
                            </Text>{' '}
                            Likes{' | '}
                            <Text color="error">
                                <b>{post.down_vote}</b>
                            </Text>{' '}
                            Dislike
                        </Typography>
                    </Box>
                </CardActionsWrapper>
            </Card>
        </Box>
    );
}

export default Post;  