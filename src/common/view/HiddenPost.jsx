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
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { StatusCode, StatusList } from "links/constant";

import { Gallery, Item } from "react-photoswipe-gallery";
import { ICONS_FONT } from "links";
import { TEXT_FONT } from "links";
import { _GLOBAL } from "links";
import { getHidePost, getUnHidePost } from "view/main/feed/service";
import { HidePost } from "./HidePost";
import { useSnackbar } from "notistack";
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

function HiddenPost({ post }) {
  const [isHidePost, setHide] = useState(false);
  const [gsize, setGsize] = useState({});
  const { enqueueSnackbar } = useSnackbar();

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
        setHide(false);
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
        setHide(true);
      } else {
        enqueueSnackbar("Error in query", {
          variant: "error",
        });
      }
    });
  };
  if (isHidePost) {
    return <HidePost onUndo={setHidePost} />;
  }
  return (
    <Box mb={2}>
      <Card>
        <CardHeader
          action={
            <>
              <Button onClick={setUnHidePost}>{"Unhide"}</Button>
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
            <Grid item xl={6}></Grid>
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

HiddenPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default React.memo(HiddenPost);
