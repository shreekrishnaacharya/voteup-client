import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  addComment,
  deleteComment,
  getViewPost,
  actionUpdateAction,
  actionUpdateMandate,
} from "../service";
import ConfirmDelete from "common/view/ConfirmDelete";
import Post from "common/view/Post";
import PostLoad from "common/view/PostLoad";
import Report from "common/view/Report";
import { useLocation, useHistory } from "react-router-dom";
import { pages, StatusCode } from "links";
import tokenService from "_services/token.service";
import Comment from "./Comment";
import AddComment from "./AddComment";
import Text from "components/Text";
import { isEmpty } from "_services";
import { useSnackbar } from "notistack";
import { addReport } from "common/service";
import { useSelector } from "react-redux";
import Status404 from "view/pages/view/Status404";
import { Helmet } from "react-helmet";
const ViewPost = () => {
  const [isPostHide, setPostHide] = useState(false);
  const search = useSelector((state) => state.search);
  const userModel = tokenService.getUser();
  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [postFeeds, setPost] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const params = new URLSearchParams(location.search);
  const postid = params.get("id");
  const [report, setReport] = useState({
    open: false,
    postid: postid,
  });
  const [confirm, setConfirm] = useState({
    open: false,
    postid: postid,
  });

  const homePage = () => {
    history.push({
      pathname: pages.HOME,
    });
  };
  const postStatic = useRef({});

  const initLoad = async () => {
    const res = await getViewPost(postid);
    if (res.flag) {
      setPost(res.data);
      postStatic.current = res.data;
      setLoading(false);
    } else if (res.status == 404) {
      setLoading(404);
    }
  };
  const onVote = async (id) => {
    await actionUpdateAction(id).then((e) => {
      if (e.flag) {
        initLoad();
      }
    });
  };
  const onMandate = async (id, type) => {
    await actionUpdateMandate(id, type).then((e) => {
      if (e.flag) {
        initLoad();
      }
    });
  };
  const addCommentForm = async (fdata) => {
    if (isEmpty(fdata.post_detail)) {
      enqueueSnackbar("Review cannot be blank", {
        variant: "error",
      });
      return false;
    }
    return addComment(postid, fdata).then((e) => {
      if (e.flag) {
        enqueueSnackbar("Review uploaded", {
          variant: "success",
        });
        initLoad();
        return true;
      } else if (e.status == 406) {
        enqueueSnackbar(e.data, {
          variant: "warning",
        });
        return false;
      }
    });
  };
  const onPostHide = (flag) => {
    setPostHide(flag);
  };

  const submitReportForm = async (fdata) => {
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

  const deleteCommentPost = async () => {
    await deleteComment(confirm.postid).then((e) => {
      if (e.flag) {
        if (confirm.postid == postid) {
          enqueueSnackbar("Post deleted", {
            variant: "success",
          });
          homePage();
        } else {
          enqueueSnackbar("Review deleted", {
            variant: "success",
          });
          setConfirm({ open: false, postid: null });
          initLoad();
        }
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

  useEffect(() => {
    initLoad();
    return () => {
      setPost({});
      setConfirm({ open: false, postid: null });
    };
  }, [postid]);

  useEffect(() => {
    if ("comments" in postFeeds && search.text != "") {
      const comments = postFeeds.comments.filter((e) => {
        if (
          e.post_detail.indexOf(search.text) > -1 ||
          e.username.indexOf(search.text) > -1
        ) {
          return true;
        }
        return false;
      });
      setPost({ ...postFeeds, comments });
    } else {
      setPost({ ...postStatic.current });
    }
  }, [search]);
  // let tagsList = "";
  // if ("tags" in postFeeds && postFeeds.tags !== null) {
  //     tagsList = postFeeds.tags.replace(/,/gi, " | ")
  // }
  if (loading === 404) {
    return <Status404 />;
  }
  return (
    <>
      <Box sx={{ pt: 2 }}>
        {loading ? (
          <>
            <PostLoad isOpen={true} />
          </>
        ) : (
          <>
            <Helmet>
              <title>{postFeeds.post_detail + ` | Referendum 2.0`}</title>
            </Helmet>
            {postFeeds.ptype == 0 ? (
              <Post
                toaster={enqueueSnackbar}
                // flash={postid === postFeeds.post_id}
                isOpen={true}
                onVote={() => {
                  onVote(postid);
                }}
                key={postFeeds._id}
                post={postFeeds}
                onMenu={handleMenu}
                userModel={userModel}
                viewPost={() => {}}
                onPostHide={onPostHide}
                onMandate={(type) => {
                  onMandate(postid, type);
                }}
              />
            ) : (
              <Comment
                toaster={enqueueSnackbar}
                // flash={postid === postFeeds.post_id}
                post={postFeeds}
                onVote={() => {
                  onVote(postFeeds._id);
                }}
                key={postFeeds._id}
                comment={postFeeds}
                setReport={setReport}
                setConfirm={setConfirm}
                userModel={userModel}
                onMandate={(type) => {
                  onMandate(postFeeds._id, type);
                }}
              />
            )}

            {postFeeds.ptype == 0 && !isPostHide && (
              <Box sx={{ marginLeft: "40px" }}>
                {postFeeds.statusCode == StatusCode.REVIEW && (
                  <>
                    <Text varient={"h1"}>Amendment/Dissentment</Text>
                    <AddComment
                      userModel={userModel}
                      onAddComment={addCommentForm}
                    />
                  </>
                )}
                {postFeeds.comments.map((comment) => {
                  return (
                    <Comment
                      toaster={enqueueSnackbar}
                      // ref={postid === comment.post_id ? myRef : null}
                      // flash={postid === comment.post_id}
                      post={postFeeds}
                      onVote={() => {
                        onVote(comment._id);
                      }}
                      key={comment._id}
                      comment={comment}
                      setReport={setReport}
                      setConfirm={setConfirm}
                      userModel={userModel}
                      onMandate={(type) => {
                        onMandate(comment._id, type);
                      }}
                    />
                  );
                })}
              </Box>
            )}
            <Report
              open={report.open}
              onReport={submitReportForm}
              onClose={() => {
                setReport({ open: false, postid: null });
              }}
            />
          </>
        )}
      </Box>
    </>
  );
};

export default ViewPost;
