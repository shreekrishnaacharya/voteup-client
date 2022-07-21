import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardMedia,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  CardContent,
  CardActions,
  IconButton
} from "@mui/material";
import React from "react";
import Text from 'components/Text';
import userImg from 'assets/images/team-1.jpg'
import LogoutIcon from '@mui/icons-material/Logout';
const Rightbar = () => {
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
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Card>
      </Box>
    </Box>
  );
};

export default Rightbar;
