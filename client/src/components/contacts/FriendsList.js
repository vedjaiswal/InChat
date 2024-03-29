import React, { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
  Typography,
} from "@mui/material";

import { users } from "../data/users";

function FriendsList() {
  return (
    <List
      sx={{
        width: "100%",
        // bgcolor: 'secondary.dark'
      }}
    >
      {users.map((user) => (
        <>
          <ListItem alignItems="flex-start" style={{ cursor: "pointer" }}>
            <ListItemAvatar>
              <Avatar alt="profile pic" src={user.imageURL} />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="secondary.light"
                  >
                    {user.lastMessage}
                  </Typography>
                  {/* {" — I'll be in your neighborhood doing errands this…"} */}
                </Fragment>
              }
            />
          </ListItem>
          <Divider component="li" />
        </>
      ))}
    </List>
  );
}

export default FriendsList;
