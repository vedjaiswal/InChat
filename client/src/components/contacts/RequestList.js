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
  Box, Button, styled
} from "@mui/material";

//icons
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import { request } from "../data/requests";

import { stringShortner } from "../../utils/stringShortner";

const ButtonGroup = styled(Box)({
    display:"flex",
    gap: "1rem"
})

const StyledButton = styled(Button)({
    height: 25,
    minWidth : 30,
    padding : 0,


})


function RequestList() {
  return (
    <List
      sx={{
        width: "100%",
        
        // bgcolor: 'secondary.dark'
      }}
    >
      {request.map((req) => (
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
                    color="secondary.light"
                  >
                    {stringShortner(req.description)}
                  </Typography>
                </Fragment>
              }
            />
            <ButtonGroup>
                <StyledButton variant="contained"><CheckIcon /></StyledButton>
                <StyledButton variant="contained"><ClearIcon /></StyledButton>
            </ButtonGroup>
          </ListItem>
          <Divider component="li" />
        </>
      ))}
    </List>
  )
}

export default RequestList