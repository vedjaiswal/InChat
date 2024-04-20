import React, { Fragment, useState } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
    Avatar,
    Typography,
    Button, styled
  } from "@mui/material";

//images
import NoRecentSearch from '../../images/noRecentSearch.png'

//components
import SearchFriend from './SearchFriend'


import { request } from '../data/requests'
import { stringShortner } from "../../utils/stringShortner";


const StyledButton = styled(Button)({
    height: 25,
    minWidth : 30,
})

function AddFriend() {

  const [recentSearches, setRecentSearches] = useState([]);

  return (
    <div>
        <SearchFriend />
        <List
      sx={{
        width: "100%",        
        bgcolor: 'secondary.dark'
      }}
    >
      {request.length !== 0 ? 
        <div>
          {/* <img style={{width:300}} src={NoRecentSearch} alt='no results' />
          <Typography>No Recent Searches</Typography> */}
        </div> 
        : request.map((req) => (
        <>
          <ListItem disablePadding alignItems="flex-start" style={{ 
            display : "flex",
            padding : 8,
            alignItems : "center",
          }}>
            <ListItemAvatar>
              <Avatar alt="profile pic" src={req.imageURL} />
            </ListItemAvatar>
            <ListItemText
              primary={req.name}
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="secondary.main"
                  >
                    {stringShortner(req.description)}
                  </Typography>
                </Fragment>
              }
            />
            <StyledButton><PersonAddIcon fontSize='large'/></StyledButton>
          </ListItem>
          <Divider component="li" />
        </>
      ))}
    </List>

    </div>
  )
}

export default AddFriend