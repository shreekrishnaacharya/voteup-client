import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {  getHiddenPost } from "../service";
import PostLoad from "common/view/PostLoad";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { setFeedList } from "redux/action/feedsAction";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Text from "components/Text";
import { setFeedReset } from "redux/action/feedsAction";
import { Helmet } from "react-helmet";
import HiddenPost from "common/view/HiddenPost";

const HiddenList = ({ userModel, feedType }) => {
  const search = useSelector((state) => state.search);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const loaderRef = useRef(null);
  const pageNo = useRef(1);
  const { enqueueSnackbar } = useSnackbar();

  // const filterPost = (pid) => {
  //   dispatch(setFeedReset(postFeeds.filter((e) => e._id !== pid)));
  // };

  useEffect(() => {
    setLoading(true);
    pageNo.current = 1;
    getHiddenPost({ status: search.cat, post_detail: search.text, size: 10 }).then(
      (res) => {
        if (res.flag) {
          dispatch(setFeedReset(res.data));
          if (res.data.length < 10) {
            setLoading(false);
          }
        }
      }
    );
  }, [search]);

  const appendFeeds = (search) => {
    getHiddenPost({
      status: search.cat,
      post_detail: search.text,
      page: pageNo.current,
      size: 10,
    }).then((res) => {
      if (res.flag) {
        dispatch(setFeedList(res.data));
        if (res.data.length < 10) {
          setLoading(false);
        }
      }
    });
  };
  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      pageNo.current += 1;
      appendFeeds(search);
    }
  };

  useEffect(() => {
    if (!loading) {
      return false;
    }
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      observer.unobserve(loaderRef.current);
    };
  }, [loading, search]);
  // console.log("i am render feeds");
  return (
    <Box sx={{ width: "100%" }}>
      <>
        {!loading && postFeeds.length == 0 ? (
          <>
            {search.text != "" ? (
              <Box
                display={"grid"}
                sx={{ textAlign: "center" }}
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
                py={10}
              >
                <Helmet>
                  <title>{`No result found for '${search.text}'`}</title>
                </Helmet>
                <p>
                  <Text>No result found for '{search.text}'</Text>
                </p>
                <p>
                  <WarningAmberIcon sx={{ fontSize: "50px" }} />
                </p>
              </Box>
            ) : (
              <Box
                display={"grid"}
                sx={{ textAlign: "center" }}
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
                py={10}
              >
                <Helmet>
                  <title>{`No post to display`}</title>
                </Helmet>
                <p>
                  <Text>No post to display</Text>
                </p>
                <p>
                  <WarningAmberIcon sx={{ fontSize: "50px" }} />
                </p>
              </Box>
            )}
          </>
        ) : (
          <>
            <Helmet>
              <title>{`Hidden Post - Profile | Referendum 2.0`}</title>
            </Helmet>
            {postFeeds.map((post) => {
              return <HiddenPost key={post._id} post={post} />;
            })}
          </>
        )}
        <div ref={loaderRef} />
        {loading && (
          <>
            <PostLoad />
            <PostLoad />
          </>
        )}
      </>
    </Box>
  );
};

export default Feed;
