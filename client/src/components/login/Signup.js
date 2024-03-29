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
  // "& .Mui-focused":{
  //   color : "#040404",
  //   borderColor : "#040404",
  //   background : "#fff"
  // },
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
  },
  // "& .MuiInput-underline:after": {
  //   borderBottomColor: "#040404"
  // },
  // "& .MuiInput-underline": {
  //   borderBottomColor: "#474747"
  // },
  // "& .MuiFilledInput-root ": {
  //   "& fieldset": {
  //     borderColor: "#040404"
  //   },
  //   "&:hover fieldset": {
  //     borderColor: "#111111",
  //     // backgroundColor : "#111111",
  //     // color : "f1f1f1",
  //     borderWidth: 8
  //   },
  //   "&.Mui-focused fieldset": {
  //     borderColor: "#111111"
  //   }
  // }
}));

function Signup({ toggleLogin }) {
  const navigate = useNavigate();
  const { setToken, setEmail } = useContext(DataContext);

  const [signUp, setSignUp] = useState({
    fullname: "",
    username: "",
    email:"",
    password: "",
  });
  
  const onValueChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
    console.log(signUp);
  };
  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSignUp = async()=>{
    try {
      const response = await authenticateSignupApi(signUp);
      const auth_token = response.data.auth_token;
      const email = signUp.email
      
      if(response.status === 200){
        const userData = {
          email,
          auth_token  
        }
        Cookies.set('auth_token', JSON.stringify(userData), { expires: 1 });
        setEmail(email);
        setToken(auth_token)
        navigate('/login')
      }

      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <StyledTextField variant="filled" label="Name" name="fullname" onChange={(e)=>{onValueChange(e)}} />
      <StyledTextField variant="filled" type="username" label="Username" name="username" onChange={(e)=>{onValueChange(e)}}/>
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
    </Container>
  );
}

export default Signup;
