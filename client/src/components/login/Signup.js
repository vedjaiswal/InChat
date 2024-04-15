import React, { useState , useContext } from "react";
import {
  TextField,
  styled,
  Box,
  FormControl,
  FilledInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { authenticateSignupApi } from "../../service/api.js";
import { DataContext } from "../../context/DataProvider.js";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

//components
import CompleteProfile from "./CompleteProfile.js";

const Container = styled(Box)`
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap : 1rem;
  grid-area : right;
`;

const SignUpButton = styled(Button)(({ theme })=>({
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  width: 300,
  height: 45,
  ":hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const SignInText = styled(Typography)(({ theme })=>({
  color: theme.palette.secondary.main,
  fontSize: 14,
  " > span": {
    cursor: "pointer",
    textDecorationLine: "underline",
  },
  " > span:hover": {
    color: "#fff",
  },
}));

const PasswordInput = styled(FormControl)(({ theme })=>({
  width: 300,
  "& label.Mui-focused": {
    color: theme.palette.secondary.light,
  },
  "& label": {
    color: theme.palette.secondary.light,
  },
  "& .MuiFilledInput-root": {
    backgroundColor: theme.palette.dark,
    color: "#fff",
  },
  "& .MuiFilledInput-root.Mui-focused ": {
    backgroundColor: theme.palette.dark,
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: theme.palette.dark,
    borderBottomColor: "#fff",
  },
  "& .MuiFilledInput-root:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiTouchRipple-root": {
    color: "#fff",
  },
}));

const StyledTextField = styled(TextField)(({ theme })=>({
  width: 300,
  "& label, label.Mui-focused": {
    color: theme.palette.secondary.light,
  },
  "& .MuiFilledInput-root": {
    backgroundColor: theme.palette.dark,
    color: "#fff",
  },
  "& .MuiFilledInput-root.Mui-focused ": {
    backgroundColor: theme.palette.dark,
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: theme.palette.dark,
    borderBottomColor: "#fff",
  },
  "& .MuiFilledInput-root:after": {
    borderBottomColor: "#fff",
  }
}));

function Signup({ toggleLogin }) {
  const { setToken, setUsername } = useContext(DataContext);

  const [complete, setComplete] = useState(false);
  const [signUp, setSignUp] = useState({
    fullname: "",
    username: "",
    email:"",
    password: "",
  });
  
  const onValueChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
    // console.log(signUp);
  };
  
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSignUp = async()=>{
    try {
      const response = await authenticateSignupApi(signUp);
      // console.log(response)
      if(response.status === 200){
        const auth_token = response.data.auth_token;
        const username = signUp.username      
        const userData = {
          username,
          auth_token  
        }
        Cookies.set('auth_token', JSON.stringify(userData), { expires: 1 });
        setUsername(username);
        setToken(auth_token)
        setComplete(true)
      }

      // console.log(response);
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  return (
    <>
    {complete ? <CompleteProfile/> : <Container>
      <StyledTextField variant="filled" label="Name" name="fullname" onChange={(e)=>{onValueChange(e)}} />
      <StyledTextField variant="filled" type="username" label="Username" name="username" onChange={(e)=>{onValueChange(e)}}/>
      {error && <Typography color="error" sx={{ marginLeft: "-140px", marginTop:"-10px", fontWeight:600, fontSize:"0.8rem" }} variant="subtitle2">
        Username already exists  
      </Typography>}
      <StyledTextField variant="filled" type="email" label="Email Address" name="email" onChange={(e)=>{onValueChange(e)}} />
      <PasswordInput variant="filled">
        <InputLabel>Password</InputLabel>
        <FilledInput
          type={showPassword ? "text" : "password"}
          name="password"
          onChange={(e)=>{onValueChange(e)}}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? (
                  <VisibilityOff sx={{ color: "secondary.dark" }} />
                ) : (
                  <Visibility sx={{ color: "secondary.dark" }} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </PasswordInput>
      <SignUpButton variant="contained" onClick={handleSignUp}>Sign Up</SignUpButton>
      <SignInText>
        Already have an account? <span onClick={toggleLogin} >Sign In</span>
      </SignInText>
    </Container>}
    </>
  );
}

export default Signup;
