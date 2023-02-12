import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Avatar,
  IconButton,
  Button,
  CardActions,
  styled,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";
import "photoswipe/dist/photoswipe.css";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import Text from "components/Text";
import ReactTimeAgo from "react-time-ago";
import React, { useEffect, useState } from "react";
import CommentTwoToneIcon from "@mui/icons-material/CommentTwoTone";
import VoteButton from "components/buttons/VoteButtons";
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import Ranking from "components/Ranking";

import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import PollIcon from "@mui/icons-material/Poll";
// import DownloadIcon from '@mui/icons-material/Download';
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { StatusCode, StatusList } from "links/constant";
import { CopyToClipboard } from "_services";
import { getDownload } from "_services";

import { Gallery, Item } from "react-photoswipe-gallery";
import { ICONS_FONT } from "links";
import { TEXT_FONT } from "links";
import { _GLOBAL } from "links";
import { getHidePost, getUnHidePost } from "view/main/feed/service";
import { HidePost } from "./HidePost";
import { useSnackbar } from "notistack";
import MandateButtons from "components/buttons/MandateButtons";
import {
  SentimentVeryDissatisfied,
  SentimentSatisfiedAlt,
} from "@mui/icons-material";
const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
       background: ${theme.colors.alpha.black[5]};
       padding: ${theme.spacing(3)};
  `
);

const ImageView = ({ meta, gsize }) => {
  if (meta.length == 0) {
    return "";
  }
  const smallItemStyles = {
    cursor: "pointer",
    objectFit: "cover",
    width: "150px",
    height: "150px",
  };
  return (
    <CardContent>
      <Gallery>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 0fr)",
              sm: "repeat(4, 0fr)",
              md: "repeat(5, 0fr)",
              lg: "repeat(5, 0fr)",
            },
            gridGap: 10,
          }}
        >
          {meta.map((item, index) => {
            return (
              <Item
                key={item.img}
                cropped
                original={item.img}
                thumbnail={item.img}
                height={"gs" + index in gsize ? gsize["gs" + index].h : 801}
                width={"gs" + index in gsize ? gsize["gs" + index].w : 1000}
              >
                {({ ref, open }) => (
                  <img
                    id={"gs" + index}
                    style={smallItemStyles}
                    ref={ref}
                    onClick={open}
                    src={item.img}
                  />
                )}
              </Item>
            );
          })}
        </Box>
      </Gallery>
    </CardContent>
  );
};

function Post({
  post,
  onMenu,
  onVote,
  onMandate,
  viewPost,
  isOpen,
  toaster,
  onPostHide,
}) {
  const [isHidePost, setHide] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [gsize, setGsize] = useState({});
  const open = Boolean(anchorEl);
  const { enqueueSnackbar } = useSnackbar();
  const handleOptionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOptionClose = () => {
    setAnchorEl(null);
  };
  const handleOptionAction = (type) => {
    onMenu(post._id, type);
    setAnchorEl(null);
  };

  useEffect(() => {
    setTimeout(() => {
      let cgsize = {};
      post.meta.map((j, i) => {
        const e = document.getElementById("gs" + i);
        if (e.complete) {
          cgsize = {
            ...cgsize,
            ["gs" + i]: { w: e.naturalWidth, h: e.naturalHeight },
          };
        } else {
          cgsize = { ...cgsize, ["gs" + i]: { w: 1000, h: 801 } };
        }
      });
      setGsize({ ...cgsize });
    }, 2000);
  }, []);

  //   let tagsList = [];
  //   if (post.tags !== null) {
  //     tagsList = post.tags.split(",").map((hash) => {
  //       return (
  //         <>
  //           <Link href="#" underline="hover">
  //             {hash}
  //           </Link>{" "}
  //         </>
  //       );
  //     });
  //   }

  const setHidePost = async () => {
    await getHidePost(post._id).then((e) => {
      if (e.flag) {
        setHide(true);
        handleOptionClose();
        onPostHide(true);
      } else {
        enqueueSnackbar("Error in query", {
          variant: "error",
        });
      }
    });
  };
  const setUnHidePost = async () => {
    await getUnHidePost(post._id).then((e) => {
      if (e.flag) {
        setHide(false);
        onPostHide(false);
      } else {
        enqueueSnackbar("Error in query", {
          variant: "error",
        });
      }
    });
  };
  if (isHidePost) {
    return <HidePost onUnhide={setUnHidePost} />;
  }
  return (
    <Box mb={2}>
      <Card>
        <CardHeader
          action={
            <>
              <IconButton color="primary" onClick={handleOptionClick}>
                <MoreHorizTwoToneIcon fontSize="medium" />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleOptionClose}>
                <MenuItem key={"hide"} onClick={setHidePost}>
                  Hide
                </MenuItem>
                <MenuItem
                  key={"report"}
                  onClick={() => {
                    handleOptionAction(0);
                  }}
                >
                  Report
                </MenuItem>
              </Menu>
            </>
          }
        />
        <Box px={3} pb={2}>
          <Typography variant="h4" fontWeight="normal">
            {post.post_detail}
          </Typography>
        </Box>
        <ImageView meta={post.meta} gsize={gsize} />
        <Box p={1}>
          <Typography variant="subtitle2">
            <ReactTimeAgo date={new Date(post.create_at)} locale="en-US" />
            {" | "}Supporters{" : "}
            <Text>
              <b>{post.supporters}</b>
            </Text>
          </Typography>
        </Box>
        <Divider />
        <CardActionsWrapper
          sx={{
            display: { xs: "flex", md: "flex" },
            py: 1.5,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xl={6}>
              <Grid container direction={"row"}>
                <Grid item xl={6}>
                  {isOpen ? (
                    <>
                      {post.statusCode == StatusCode.VOTING && (
                        <VoteButton
                          post={post}
                          sx={{ mr: { xs: 0.5, md: 2 } }}
                          onClick={onVote}
                          hasVote={post.hasVote}
                        />
                      )}
                      {post.statusCode == StatusCode.MANDATE && (
                        <MandateButtons
                          post={post}
                          sxy={{ mr: { xs: 0.5, md: 2 } }}
                          sxn={{ mr: { xs: 0.5, md: 2 } }}
                          onClick={onMandate}
                          hasMandate={post.hasMandate}
                        />
                      )}
                    </>
                  ) : (
                    <Button
                      startIcon={<CommentTwoToneIcon />}
                      variant="outlined"
                      sx={{ mr: { xs: 0.5, md: 2 } }}
                      onClick={() => {
                        viewPost(post._id);
                      }}
                    >
                      View
                    </Button>
                  )}
                </Grid>
                <Grid item xl={6}>
                  <Button
                    startIcon={<ShareTwoToneIcon />}
                    variant="outlined"
                    onClick={() => {
                      CopyToClipboard(post.link);
                      toaster("Link copied!!!");
                    }}
                  >
                    Share
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={6}>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  fontSize: TEXT_FONT,
                }}
              >
                <Text
                  sx={{ display: "flex", mr: 1 }}
                  color={StatusList[post.statusCode].color}
                >
                  {StatusList[post.statusCode].icon}&nbsp;{post.status}
                </Text>
                {post.statusCode == StatusCode.MANDATE && (
                  <>
                    {"|"}
                    <Text sx={{ display: "flex", mx: 1 }}>
                      <SentimentSatisfiedAlt
                        color="info"
                        sx={{ fontSize: ICONS_FONT }}
                      />
                      &nbsp;{post.tamd}
                    </Text>
                    {"|"}
                    <Text sx={{ display: "flex", mx: 1 }}>
                      <SentimentVeryDissatisfied
                        color="warning"
                        sx={{ fontSize: ICONS_FONT }}
                      />
                      &nbsp;{post.trmd}
                    </Text>
                  </>
                )}
                {"|"}
                <Text sx={{ display: "flex", mx: 1 }}>
                  <QuestionAnswerIcon sx={{ fontSize: ICONS_FONT }} />
                  &nbsp;{post.review}
                </Text>
                {post.statusCode > StatusCode.VOTING && (
                  <>
                    {"|"}
                    <Text sx={{ display: "flex", mx: 1 }}>
                      <PollIcon sx={{ fontSize: ICONS_FONT }} />
                      &nbsp;{post.tot_votes}
                    </Text>
                    {"|"}
                    <Text sx={{ display: "flex", mx: 1 }}>
                      <ThumbUpIcon sx={{ fontSize: ICONS_FONT }} />
                      &nbsp;{post.votes}
                    </Text>
                    {"|"}
                    <Ranking
                      sx={{ mx: 1 }}
                      voters={post.tot_votes}
                      votes={post.votes}
                    />
                    {(post.statusCode == StatusCode.ACCEPTANCE ||
                      post.statusCode == StatusCode.MANDATE) && (
                      <>
                        {"|"}
                        <Box
                          component={"a"}
                          sx={{
                            textDecoration: "none",
                            color: "#6E759F",
                            ml: 0.5,
                            mt: "4px",
                          }}
                          href={post.dlink}
                          onClick={(e) => {
                            e.preventDefault();
                            getDownload(post.dlink);
                          }}
                        >
                          <DownloadForOfflineIcon
                            sx={{ fontSize: ICONS_FONT }}
                          />
                        </Box>
                      </>
                    )}
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </CardActionsWrapper>
      </Card>
    </Box>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  onMenu: PropTypes.func.isRequired,
  userModel: PropTypes.object.isRequired,
  viewPost: PropTypes.func.isRequired,
  onVote: PropTypes.func,
  isOpen: PropTypes.bool,
};

Post.defaultProps = {
  isOpen: false,
};
export default React.memo(Post);
