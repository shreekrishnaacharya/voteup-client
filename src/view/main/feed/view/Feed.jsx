import { Box } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { getFeeds, getPost, getHidePost } from "../service";
import ConfirmDelete from "common/view/ConfirmDelete";
import Post from "common/view/Post";
import PostLoad from "common/view/PostLoad";
import Report from "common/view/Report";
import { useHistory } from "react-router-dom";
import { pages } from "links";
import { addReport } from "common/service";
import { deletePost } from "common/service";
import { useSnackbar } from "notistack";
import { isEmpty } from "_services";
import { useDispatch, useSelector } from "react-redux";
import { setFeedList } from "redux/action/feedsAction";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Text from "components/Text";
import { setFeedReset } from "redux/action/feedsAction";
import { Helmet } from "react-helmet";

const Feed = ({ userModel, feedType }) => {
  const search = useSelector((state) => state.search);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const postFeeds = useSelector((state) => state.feedList);
  const dispatch = useDispatch();
  const loaderRef = useRef(null);
  const pageNo = useRef(1);
  const [report, setReport] = useState({
    open: false,
    postid: null,
  });
  const [confirm, setConfirm] = useState({
    open: false,
    postid: null,
  });
  const { enqueueSnackbar } = useSnackbar();
  const viewPost = (postid) => {
    history.push({
      pathname: pages.POST,
      search: `?id=${postid}`,
      state: {
        id: postid,
      },
    });
  };

  const filterPost = (pid) => {
    dispatch(setFeedReset(postFeeds.filter((e) => e._id !== pid)));
  };

  const submitReportForm = async (fdata, reset) => {
    if (fdata.rtype == 0 || isEmpty(fdata.remark)) {
      enqueueSnackbar("Please complete the from", {
        variant: "warning",
      });
      return;
    }
    await addReport(report.postid, fdata).then((e) => {
      if (e.status == 208) {
        enqueueSnackbar("Already reported", {
          variant: "info",
        });
        return;
      }
      if (e.flag) {
        enqueueSnackbar("Report submitted", {
          variant: "success",
        });
        reset();
        setReport({ open: false, postid: null });
      } else {
        enqueueSnackbar("Error in query", {
          variant: "error",
        });
      }
    });
  };

  const handleMenu = (postid, type) => {
    if (type == 0) {
      setReport({ postid: postid, open: true });
    } else if (type == 2) {
      setConfirm({ postid: postid, open: true });
    }
  };
  const handleDeleteAction = async () => {
    await deletePost(confirm.postid).then((e) => {
      if (e.flag) {
        enqueueSnackbar("Post deleted", {
          variant: "success",
        });
        filterPost(confirm.postid);
      } else {
        enqueueSnackbar("Error performing query", {
          variant: "error",
        });
      }
    });
    setConfirm({ open: false, postid: null });
  };

  useEffect(() => {
    setLoading(true);
    pageNo.current = 1;
    if (feedType == "profile") {
      getPost({ status: search.cat, post_detail: search.text, size: 10 }).then(
        (res) => {
          if (res.flag) {
            dispatch(setFeedReset(res.data));
            if (res.data.length < 10) {
              setLoading(false);
            }
          }
        }
      );
    } else {
      getFeeds({ status: search.cat, post_detail: search.text, size: 10 }).then(
        (res) => {
          if (res.flag) {
            dispatch(setFeedReset(res.data));
            if (res.data.length < 10) {
              setLoading(false);
            }
          }
        }
      );
    }
  }, [search]);

  const appendFeeds = (search) => {
    if (feedType == "profile") {
      getPost({
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
    } else {
      getFeeds({
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
    }
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
              <title>{`Feeds - Home | Referendum 2.0`}</title>
            </Helmet>
            {postFeeds.map((post) => {
              return (
                <Post
                  toaster={enqueueSnackbar}
                  key={post._id}
                  post={post}
                  onMenu={handleMenu}
                  userModel={userModel}
                  viewPost={viewPost}
                />
              );
            })}
            <Report
              open={report.open}
              onReport={submitReportForm}
              onClose={() => {
                setReport({ open: false, postid: null });
              }}
            />
            <ConfirmDelete
              open={confirm.open}
              onDelete={handleDeleteAction}
              onClose={() => {
                setConfirm({ open: false, postid: null });
              }}
            />
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
