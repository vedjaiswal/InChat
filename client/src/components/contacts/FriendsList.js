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

  const { token } = useContext(DataContext);

  useEffect(()=>{
    async function getFriends(){
      let response = await getAllFriends(token)
      console.log(response)
      setFriends(response.data)
    }
    getFriends()
  }, [])

  return (
    <List
    // component="nav"
    // aria-labelledby="nested-list-subheader"
      sx={{
        width: "100%",
        // bgcolor: 'secondary.dark'
      }}
    >
      {friends.map((user) => (
        <>
          <ListItem disablePadding alignItems="flex-start" style={{ cursor: "pointer" }}>
            <ListItemButton>
            <ListItemAvatar>
              <Avatar alt="profile pic" src={user.imageUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={user.friend}
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
