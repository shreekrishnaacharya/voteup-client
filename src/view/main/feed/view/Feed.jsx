import { Box, Stack, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFeeds } from "../service";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [postFeeds, setFeeds] = useState([]);
  // setTimeout(() => {
  //   setLoading(false);
  // }, [3000]);


  useEffect(() => {
    getFeeds().then(res => {
      console.log(res)
      if (res.flag) {
        setFeeds(res.data);
        setLoading(false);
      }
    })
  }, []);
  return (
    <Box flex={4} p={{ xs: 0, md: 1 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {postFeeds.map(post => {
            return <Post key={post._id} post={post} />
          })}
        </>
      )}
    </Box>
  );
};

export default Feed;
