import React, { Fragment, useEffect, useState, useContext } from "react";
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

//api
import { getAllFriends } from "../../service/api";

//context
import { DataContext } from "../../context/DataProvider";

import { users } from "../data/users";

function FriendsList() {
  const [ friends, setFriends ] = useState([]);
  const [ selectedIndex, setSelectedIndex ] = useState(-1);

  const { token, setCurrentChat } = useContext(DataContext);

  useEffect(() => {
    async function getFriends(token) {
      // console.log("token : " + token);
      let response = await getAllFriends(token);
      // console.log(response)
      setFriends(response.data);
    }
    if (token !== "") getFriends(token);
  }, [token]);

  const handleListItemClick = (event, index, user) => {
    setSelectedIndex(index);
    setCurrentChat(user);
  };

  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      {friends.map((user, index) => (
        <div key={index}>
          <ListItem
            disablePadding
            alignItems="flex-start"
            style={{ cursor: "pointer" }}
          >
            <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index, user)}
            >
              <ListItemAvatar>
                <Avatar alt="profile pic" src={user.imageUrl} />
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "text.primary" }}
                primary={user.friend}
                secondary={
                  <Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="primary.main"
                    >
                      {user.lastMessage}
                    </Typography>
                    {/* {" — I'll be in your neighborhood doing errands this…"} */}
                  </Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ color: "primary" }} component="li" />
        </div>
      ))}
    </List>
  );
}

export default FriendsList;
