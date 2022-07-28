import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFeeds, getPost } from "../service";
import ConfirmDelete from "./ConfirmDelete";
import Post from "./Post";
import PostLoad from "./PostLoad";
import Report from "./Report";


const Feed = ({ userModel, feedType }) => {
  const [loading, setLoading] = useState(true);
  const [postFeeds, setFeeds] = useState([]);
  const [report, setReport] = useState({
    open: false,
    postid: null
  })
  const [confirm, setConfirm] = useState({
    open: false,
    postid: null
  })

  const filterPost = (pid) => {
    setFeeds(postFeeds.filter(e => e._id !== pid));
  }

  useEffect(() => {
    if (feedType == 'profile') {
      getPost().then(res => {
        if (res.flag) {
          setFeeds(res.data);
          setLoading(false);
        }
      })
    } else {
      getFeeds().then(res => {
        if (res.flag) {
          setFeeds(res.data);
          setLoading(false);
        }
      })
    }

    return () => {
      setFeeds([])
    }
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      {loading ? (
        <>
          <PostLoad />
          <PostLoad />
          <PostLoad />
        </>
      ) : (
        <>
          {postFeeds.map(post => {
            return <Post key={post._id} post={post} setReport={setReport} setConfirm={setConfirm} userModel={userModel} />
          })}
        </>
      )
      }
      <Report report={report} setOpen={setReport} />
      <ConfirmDelete confirm={confirm} setConfirm={setConfirm} filterPost={filterPost} />
    </Box >
  );
};

export default Feed;
