import {
  Box,
  Card,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Skeleton
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRecent, getResult } from "../service";

import { useHistory } from 'react-router-dom';
import { pages } from 'links';
import Footer from "components/Footer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Loading = () => {

  return <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
    </ListItemAvatar>
    <ListItemText
      primary={<Skeleton animation="wave" height={20} width="80%" />}
      secondary={
        <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
      }
    />
  </ListItem>
}

const Rightbar = () => {
  const history = useHistory();
  const { recent, result } = useSelector(state => state.rightbar)
  const dispatch = useDispatch();
  const [loadrec, setLoadRec] = useState(true);
  const [loadres, setLoadRes] = useState(true);
  // const [postFeeds, setFeeds] = useState([]);
  // const [resultFeeds, setResult] = useState([]);

  const viewPost = (postid) => {
    history.push({
      pathname: pages.POST,
      search: `?id=${postid}`,
      state: {
        id: postid
      }
    });
  }

  useEffect(() => {
    getRecent().then(res => {
      if (res.flag) {
        setFeeds(res.data);
        setLoadRec(false);
      }
    })
  }, []);

  useEffect(() => {
    getResult().then(res => {
      if (res.flag) {
        setResult(res.data);
        setLoadRes(false);
      }
    })
  }, []);

  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
      <Box position="sticky" width={350}>
        <Typography variant="h6" fontWeight={100}>
          Recent Posts
        </Typography>
        <Card>
          {loadrec ? (
            <List sx={{ width: '100%', maxWidth: 380, bgcolor: 'background.paper', padding: "12px 0px" }}>
              <Loading />
              <Divider variant="inset" />
              <Loading />
              <Divider variant="inset" />
              <Loading />
            </List>
          ) : (
            <List sx={{ width: '100%', maxWidth: 380, bgcolor: 'background.paper', padding: "12px 0px" }}>
              {postFeeds.map(post => {
                return <div key={'recent' + post._id}>
                  <a style={{ cursor: "pointer" }} onClick={() => {
                    viewPost(post._id)
                  }}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={post.username}
                        secondary={
                          <Typography noWrap style={{ color: "#6E759F" }}>
                            {post.post_detail}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </a>
                  <Divider component="li" />
                </div>
              })}
            </List>
          )}
        </Card>
      </Box>
      <Box position="sticky" width={350}>
        <Typography variant="h6" fontWeight={100}>
          Results
        </Typography>
        <Card>
          {loadres ? (
            <List sx={{ width: '100%', maxWidth: 380, bgcolor: 'background.paper', padding: "12px 0px" }}>
              <Loading />
              <Divider variant="inset" />
              <Loading />
              <Divider variant="inset" />
              <Loading />
            </List>
          ) : (
            <List sx={{ width: '100%', maxWidth: 380, bgcolor: 'background.paper', padding: "12px 0px" }}>
              {resultFeeds.map(post => {
                return <div key={'recent' + post._id}>
                  <a style={{ cursor: "pointer" }} onClick={() => {
                    viewPost(post._id)
                  }}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={post.username}
                        secondary={
                          <Typography noWrap style={{ color: "#6E759F" }}>
                            {post.post_detail}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </a>
                  <Divider component="li" />
                </div>
              })}
            </List>
          )}
        </Card>
      </Box>
      <Footer mini={true} />
    </Box>
  );
};

export default Rightbar;
