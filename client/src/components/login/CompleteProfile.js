import React, { useState } from "react";
import { Button, Box, Avatar, TextField, styled } from "@mui/material";
import {useNavigate} from 'react-router-dom'

const StyledTextField = styled(TextField)(({ theme })=>({
    width: 300,
    // backgroundColor : theme.palette.dark,
    // "& label, label.Mui-focused": {
    //   color: theme.palette.primary.main,
    //   zIndex : 1,
    // },
    // "& .MuiInput-underline:after": {
    //     borderBottomColor: theme.palette.primary.main
    // },
    // "& .MuiInput-underline": {
    //     borderBottomColor: theme.palette.primary.main
    // },
    // "& .MuiInput-root ": {
    //     "& fieldset": {
    //     borderColor: theme.palette.primary.main
    //     },
    //     "&:hover fieldset": {
    //     borderColor: theme.palette.primary.main,
    //     // backgroundColor : "#111111",
    //     // color : "f1f1f1",
    //     borderWidth: 8
    //     },
    //     "&.Mui-focused fieldset": {
    //     borderColor: theme.palette.primary.main
    //     }
    // }
}));

const MainContainer = styled(Box)({
  display:"flex",
  justifyContent:"center",
  alignItems : "center",
  flexDirection : "column",
  gap : "1.5rem",
})

function CompleteProfile() {
  const [preview, setPreview] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState(null)

  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if(file) {
      setAvatar(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const onInputChange = (event) =>{
    setDescription(event.target.value);
  }

  const onFormSubmit = (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', avatar);
    formData.append('description', description);
    navigate('/')
  }

  return (
    <MainContainer>
      <Avatar alt="Profile photo" src={preview} sx={{ width: 200, height: 200 }} />
      <Button variant="contained" component="label">
        Upload Image
        <input type="file" hidden onChange={handleImageChange} />
      </Button>
      <StyledTextField focused onChange={onInputChange} label="Description" variant="standard" />
      <Button onClick={onFormSubmit} variant="contained" sx={{ textTransform:"none"}}>Start Chatting...</Button>
    </MainContainer>
  );
}

export default CompleteProfile;
