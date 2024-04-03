import React, { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemButton,
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
    // component="nav"
    // aria-labelledby="nested-list-subheader"
      sx={{
        width: "100%",
        // bgcolor: 'secondary.dark'
      }}
    >
      {users.map((user) => (
        <>
          <ListItem disablePadding alignItems="flex-start" style={{ cursor: "pointer" }}>
            <ListItemButton>
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
            </ListItemButton>
          </ListItem>
          <Divider component="li" />
        </>
      ))}
    </List>
  );
}

export default FriendsList;
