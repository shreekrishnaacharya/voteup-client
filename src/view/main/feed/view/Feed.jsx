import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFeeds, getPost } from "../service";
import ConfirmDelete from "common/view/ConfirmDelete";
import Post from "common/view/Post";
import PostLoad from "common/view/PostLoad";
import Report from "common/view/Report";
import { useHistory } from "react-router-dom";
import { pages } from "links";
import { addReport } from "common/service";
import { deletePost } from "common/service";
import { useSnackbar } from 'notistack';
import { isEmpty } from "_services";
import { useDispatch, useSelector } from "react-redux";
import { setFeedList } from "redux/action/feedsAction";
const Feed = ({ userModel, feedType }) => {
  const search = useSelector(state => state.search);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const postFeeds = useSelector(state => state.feedList.feeds);
  const dispatch = useDispatch();
  const [report, setReport] = useState({
    open: false,
    postid: null
  })
  const [confirm, setConfirm] = useState({
    open: false,
    postid: null
  })
  const { enqueueSnackbar } = useSnackbar();
  const viewPost = (postid) => {
    history.push({
      pathname: pages.POST,
      search: `?id=${postid}`,
      state: {
        id: postid
      }
    });
  }

  const filterPost = (pid) => {
    dispatch(setFeedList(postFeeds.filter(e => e._id !== pid)));
  }

  const submitReportForm = (fdata, reset) => {
    if (fdata.rtype == 0 || isEmpty(fdata.remark)) {
      enqueueSnackbar("Please complete the from", {
        variant: 'warning',
      });
      return;
    }
    addReport(report.postid, fdata).then(e => {
      if (e.status == 208) {
        enqueueSnackbar("Already reported", {
          variant: 'info',
        });
        return;
      }
      if (e.flag) {
        enqueueSnackbar("Report submitted", {
          variant: 'success',
        });
        reset()
        setReport({ open: false, postid: null });
      } else {
        enqueueSnackbar("Error in query", {
          variant: 'error',
        });
      }
    })
  }

  const handleMenu = (postid, type) => {
    if (type == 0) {
      setReport({ postid: postid, open: true })
    } else if (type == 2) {
      setConfirm({ postid: postid, open: true })
    }
  }
  const handleDeleteAction = () => {
    deletePost(confirm.postid).then(e => {
      if (e.flag) {
        enqueueSnackbar("Post deleted", {
          variant: 'success',
        });
        filterPost(confirm.postid)
      } else {
        enqueueSnackbar("Error performing query", {
          variant: 'error',
        });
      }
    })
    setConfirm({ open: false, postid: null });
  };

  useEffect(() => {
    setLoading(true);
    if (feedType == 'profile') {
      getPost({ status: search.cat, post_detail: search.text }).then(res => {
        if (res.flag) {
          dispatch(setFeedList(res.data));
          setLoading(false);
        }
      })
    } else {
      getFeeds({ status: search.cat, post_detail: search.text }).then(res => {
        if (res.flag) {
          dispatch(setFeedList(res.data));
          setLoading(false);
        }
      })
    }
  }, [search]);

  return (
    <Box sx={{ width: '100%' }}>
      {loading && postFeeds.length == 0 ? (
        <>
          <PostLoad />
          <PostLoad />
          <PostLoad />
        </>
      ) : (
        <>
          {postFeeds.map(post => {
            return <Post toaster={enqueueSnackbar} key={post._id} post={post} onMenu={handleMenu} userModel={userModel} viewPost={viewPost} />
          })}
        </>
      )
      }
      <Report open={report.open} onReport={submitReportForm} onClose={() => { setReport({ open: false, postid: null }) }} />
      <ConfirmDelete open={confirm.open} onDelete={handleDeleteAction} onClose={() => { setConfirm({ open: false, postid: null }) }} />
    </Box >
  );
};

export default Feed;
