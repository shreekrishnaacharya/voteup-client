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
  Menu,
  MenuItem,
} from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  Delete,
  Info,
  SentimentSatisfiedAlt,
  SentimentVeryDissatisfied,
} from "@mui/icons-material";
import ReactTimeAgo from "react-time-ago";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import React, { useState } from "react";
import VoteButton from "components/buttons/VoteButtons";
import Ranking from "components/Ranking";
import Text from "components/Text";
import { StatusCode, StatusList } from "links";
import { CopyToClipboard } from "_services";
import { Link } from "react-router-dom";
import { getDownload } from "_services";
import { ICONS_FONT } from "links";
import { TEXT_FONT } from "links";
import { _GLOBAL } from "links";
import MandateButtons from "components/buttons/MandateButtons";
import { getHidePost, getUnHidePost } from "../service";
import { HidePost } from "common/view/HidePost";
import useMandateButtons from "hooks/mandate.button";

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
       background: ${theme.colors.alpha.black[5]};
       padding: ${theme.spacing(3)};
  `
);

function Comment({
  comment,
  post,
  onVote,
  onMandate,
  setReport,
  setConfirm,
  userModel,
  toaster,
}) {
  const { AcceptButton, RejectButton } = useMandateButtons({
    post,
    onClick: onMandate,
    hasMandate: comment.hasMandate,
    size: "small",
  });
  const [isHidePost, setHide] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOptionAction = (type) => {
    if (type == 0) {
      setReport({ postid: comment._id, open: true });
    } else if (type == 2) {
      setConfirm({ postid: comment._id, open: true });
    }
  };
  const handleOptionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOptionClose = () => {
    setAnchorEl(null);
  };
  const onPostHide = (flag) => {
    setHide(flag);
  };
  const setHidePost = async () => {
    await getHidePost(comment._id).then((e) => {
      if (e.flag) {
        setHide(true);
        handleOptionClose();
        onPostHide(true);
      } else {
        toaster("Error in query", {
          variant: "error",
        });
      }
    });
  };
  const setUnHidePost = async () => {
    await getUnHidePost(comment._id).then((e) => {
      if (e.flag) {
        setHide(false);
        onPostHide(false);
      } else {
        toaster("Error in query", {
          variant: "error",
        });
      }
    });
  };
  if (isHidePost) {
    return <HidePost onUndo={setUnHidePost} />;
  }
  return (
    <Box mb={1}>
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
                {comment.userid === userModel._id ? (
                  <MenuItem
                    key={"delete"}
                    onClick={() => {
                      handleOptionAction(2);
                    }}
                  >
                    Delete
                  </MenuItem>
                ) : (
                  <MenuItem
                    key={"report"}
                    onClick={() => {
                      handleOptionAction(0);
                    }}
                  >
                    Report
                  </MenuItem>
                )}
              </Menu>
            </>
          }
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
            display: { xs: "block", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={1}
            justifyContent="space-between"
          >
            <Grid item xl={6}>
              <Grid
                container
                spacing={1}
                direction={"row"}
                justifyContent="space-between"
                alignItems={"center"}
              >
                {/* <Stack direction="row" spacing={1} justifyContent="space-between"> */}
                {post.statusCode == StatusCode.VOTING && (
                  <Grid item xs={6} sm={"auto"}>
                    <VoteButton
                      post={comment}
                      size="small"
                      onClick={onVote}
                      hasVote={comment.hasVote}
                    />
                  </Grid>
                )}
                {comment.statusCode == StatusCode.MANDATE && (
                  <>
                    <Grid item xs={6} sm={"auto"}>
                      <AcceptButton size="small" />
                    </Grid>
                    <Grid item xs={6} sm={"auto"}>
                      <RejectButton size="small" />
                    </Grid>
                  </>
                )}
                <Grid item xs={6} sm={"auto"}>
                  <Button
                    startIcon={<ShareTwoToneIcon />}
                    variant="outlined"
                    size="small"
                    onClick={() => {
                      CopyToClipboard(comment.link);
                      toaster("Link copied!!!");
                    }}
                  >
                    Share
                  </Button>
                </Grid>
                {post.ptype == 1 && (
                  <Grid item xl={6} sm={"auto"}>
                    <Button
                      component={Link}
                      to={"post?id=" + comment.parent_id}
                      startIcon={<LaunchIcon />}
                      variant="outlined"
                      size="small"
                      color="info"
                    >
                      Open Main Post
                    </Button>
                  </Grid>
                )}
                {/* </Stack> */}
              </Grid>
            </Grid>
            <Grid item xl={6}>
              <Box sx={{ mt: { xs: 1, md: 0 } }}>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    fontSize: TEXT_FONT,
                  }}
                >
                  {post.statusCode > StatusCode.VOTING && (
                    <>
                      <Text
                        sx={{ display: "flex", mr: 1 }}
                        color={StatusList[comment.statusCode].color}
                      >
                        {StatusList[comment.statusCode].icon}&nbsp;
                        {comment.status}
                      </Text>
                      {comment.statusCode == StatusCode.MANDATE && (
                        <>
                          {"|"}
                          <Text sx={{ display: "flex", mx: 1 }}>
                            <SentimentSatisfiedAlt
                              color="info"
                              sx={{ fontSize: ICONS_FONT }}
                            />
                            &nbsp;{comment.tamd}
                          </Text>
                          {"|"}
                          <Text sx={{ display: "flex", mx: 1 }}>
                            <SentimentVeryDissatisfied
                              color="warning"
                              sx={{ fontSize: ICONS_FONT }}
                            />
                            &nbsp;{comment.trmd}
                          </Text>
                        </>
                      )}
                      {"|"}
                      <Text sx={{ display: "flex", mx: 1 }}>
                        <ThumbUpIcon sx={{ fontSize: ICONS_FONT }} />
                        &nbsp;{comment.votes}
                      </Text>
                      {"|"}
                      <Ranking
                        sx={{ mx: 1 }}
                        voters={post.tot_votes}
                        votes={comment.votes}
                      />
                      {comment.statusCode == StatusCode.ACCEPTANCE && (
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
                            href={comment.dlink}
                            onClick={(e) => {
                              e.preventDefault();
                              getDownload(comment.dlink);
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
              </Box>
            </Grid>
          </Grid>
        </CardActionsWrapper>
      </Card>
    </Box>
  );
}

export default Comment;
