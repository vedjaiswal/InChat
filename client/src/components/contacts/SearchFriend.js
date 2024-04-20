import React, {Fragment, useState, useEffect, useContext} from 'react'
import { Typography, Button, Divider, Avatar, ListItemAvatar, InputBase, Box, List, ListItem, ListItemText, styled } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';

//api
import { getSearchedUser, sentRequest } from '../../service/api';

//context
import { DataContext } from '../../context/DataProvider';

//utils
import { stringShortner } from "../../utils/stringShortner";

const SearchContainer = styled(Box)(({ theme }) => ({
  backgroundColor : theme.palette.secondary,
  display: "flex",
  borderRadius : 2,
  marginLeft : 10,
}));

const StyledButton = styled(Button)({
    height: 25,
    minWidth : 30,
})

const InputSearchBase = styled(InputBase)`
    padding-left : 20px;
    width : 100%;
    font-size : unset;
`

const SearchIconWrapper = styled(Box)`
    // color : blue;
    padding : 5px;
    display : flex;
    cursor : pointer;
`;

const ListWrapper = styled(List)(({ theme }) => ({
  position : "absolute",
  marginTop : 36,
  backgroundColor : theme.palette.secondary.light,
  color : theme.palette.primary,
  width : "29vw"
}));

function SearchFriend() {

    const [searchText, setSearchText] = useState('');
    const [users, setUsers] = useState([])

    const { token, username } = useContext(DataContext);

    const onRequestSent = async(e, user) =>{
        e.preventDefault();
        console.log("request sent to : ", user.username)
        console.log(user)
        await sentRequest(user._id, token);
    }

    const onSearchChange = (e) =>{
      setSearchText(e.target.value)
    }

    useEffect(() => {
        if(searchText){
            const getUsers = setTimeout(async() => {
                let response = await getSearchedUser(searchText, token)
                console.log(response.data)
                setUsers(response.data)
              }, 1000)

            return () => clearTimeout(getUsers)
        }        
    }, [searchText])

  return (
    <SearchContainer>
      <InputSearchBase 
          placeholder='Search username'
          onChange={(e) => onSearchChange(e)}
          value={searchText}
      />
      <SearchIconWrapper>
          <SearchIcon />
      </SearchIconWrapper>
      {
          users.length !== 0 && 
          <ListWrapper >
              {
                  users.map(user => (
                    <>
                    <ListItem disablePadding  alignItems="flex-start" style={{ 
                      display : "flex",
                      padding : 8,
                      alignItems : "center",
                    }}>
                      <ListItemAvatar>
                        <Avatar alt="profile pic" src={user.imageURL} />
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ color : "text.primary"}}
                        primary={user.username}
                        secondary={
                          <Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="primary.main"
                            >
                              {stringShortner(user.description)}
                            </Typography>
                          </Fragment>
                        }
                      />
                      <StyledButton onClick={(e) => onRequestSent(e, user)}><PersonAddIcon fontSize='large'/></StyledButton>
                    </ListItem>
                    <Divider component="li" />
                  </>
                  ))
              }
          </ListWrapper>
      }
    </SearchContainer>
  )
}

export default SearchFriend