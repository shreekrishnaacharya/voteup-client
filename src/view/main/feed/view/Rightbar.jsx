import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  CardContent,
  CardActions,
  IconButton,
  Stack,
  Skeleton
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Text from 'components/Text';
import userImg from 'assets/images/team-1.jpg'
import LogoutIcon from '@mui/icons-material/Logout';
import { getRecent } from "../service";

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

  const [loading, setLoading] = useState(true);
  const [postFeeds, setFeeds] = useState([]);


  useEffect(() => {
    getRecent().then(res => {
      console.log(res)
      if (res.flag) {
        setFeeds(res.data);
        setLoading(false);
      }
    })
  }, []);

  return (
    <Box flex={1} p={3} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="sticky" width={350}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Profile
        </Typography>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 50 }}
            image={userImg}
            alt="Live from space album cover"
          />
          <CardContent>
            <Text>Krishna Acharya</Text>
          </CardContent>
          <CardActions>
            <IconButton color="error">
              <LogoutIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </CardActions>
        </Card>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Recent Posts
        </Typography>
        <Card>
          {loading ? (
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
                return <>
                  <ListItem key={post._id} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={post.username} src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={post.username}
                      secondary={
                        <React.Fragment>
                          {post.desc}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              })}
            </List>
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default Rightbar;
