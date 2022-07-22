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
    styled
} from '@mui/material';

import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import Text from 'components/Text';
import { ThumbDownAltTwoTone } from '@mui/icons-material';

const CardActionsWrapper = styled(CardActions)(
    ({ theme }) => `
       background: ${theme.colors.alpha.black[5]};
       padding: ${theme.spacing(3)};
  `
);

function Post({ post }) {
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
                            {post.tags.map(hash => {
                                return <Link href="#" underline="hover">
                                    {hash}
                                </Link>
                            })}
                        </>
                    }
                />
                <Box px={3} pb={2}>
                    <Typography variant="h4" fontWeight="normal">
                        {post.desc}
                    </Typography>
                </Box>
                <CardMedia
                    sx={{ minHeight: 280 }}
                    image="/static/images/placeholders/covers/6.jpg"
                    title="Card Cover"
                />
                <Box p={3}>
                    <Typography variant="subtitle2">
                        • 4 mins ago
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
                    <Box>
                        <Button color='primary' startIcon={<ThumbUpAltTwoToneIcon />} variant={post.vtype == 1 ? "contained" : "outlined"}>
                            Like
                        </Button>
                        <Button color='error' startIcon={<ThumbDownAltTwoTone />} variant={post.vtype == 0 ? "contained" : "outlined"}>
                            Dislike
                        </Button>
                        <Button startIcon={<ShareTwoToneIcon />} variant="outlined">
                            Share
                        </Button>
                    </Box>
                    <Box sx={{ mt: { xs: 2, md: 0 } }}>
                        <Typography variant="subtitle2" component="span">
                            <Text color="green">
                                <b>{post.up_count}</b>
                            </Text>{' '}
                            Likes{' '}
                            <Text color="red">
                                <b>{post.down_count}</b>
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