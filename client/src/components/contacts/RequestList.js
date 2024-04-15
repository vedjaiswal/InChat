import React, { Fragment, useEffect, useState, useContext } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
  Typography,
  Box, Button, styled
} from "@mui/material";

//api
import { getAllRequests, requestAction } from "../../service/api";

//context
import { DataContext } from "../../context/DataProvider";

//icons
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

// import { request } from "../data/requests";

//utils
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

  const [ requests, setRequests ] = useState([]);

  const { token, username } = useContext(DataContext);

  useEffect(()=>{
    async function getRequests(){
      let response = await getAllRequests(token)
      console.log(response)
      setRequests(response.data)
    }
    getRequests()
  }, [])

  const onRequestAction = async(e, to, action) =>{
    e.preventDefault();
    let response = await requestAction(token, to, action);
    console.log(response);
  }

  return (
    <List
      sx={{
        width: "100%",        
        // bgcolor: 'secondary.dark'
      }}
    >
      {requests.map((req) => (
        <>
          <ListItem disablePadding alignItems="flex-start" style={{ 
            display : "flex",
            padding : 8,
            alignItems : "center",
          }}>
            <ListItemAvatar>
              <Avatar alt="profile pic" src={req.imageUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={req.fromUsername}
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
                <StyledButton onClick={(e)=>onRequestAction(e, req.from, true)} variant="contained"><CheckIcon /></StyledButton>
                <StyledButton onClick={(e)=>onRequestAction(e, req.from, false)} variant="contained"><ClearIcon /></StyledButton>
            </ButtonGroup>
          </ListItem>
          <Divider component="li" />
        </>
      ))}
    </List>
  )
}

export default RequestList