import React, { useState, useContext } from "react";
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
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { authenticateLoginApi } from "../../service/api.js";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import Cookies from "js-cookie";

const Container = styled(Box)`
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  grid-area: right;
`;

const SignUpButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  width: 300,
  height: 45,
  ":hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const SignInText = styled(Typography)(({ theme }) => ({
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

const PasswordInput = styled(FormControl)(({ theme }) => ({
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

const StyledTextField = styled(TextField)(({ theme }) => ({
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

function Login({ toggleLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { setToken, setEmail } = useContext(DataContext);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onValueChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    console.log(loginData);
  };

  /* login submit handler to set token and cookie*/
  const submitHandler = async (event) => {
    event.preventDefault();
    let res = await authenticateLoginApi(loginData);
    console.log(res);
    const email = loginData.email;
    const auth_token = res.data.auth_token;
    if (res.status === 200) {
      const userData = {
        email,
        auth_token,
      };
      Cookies.set("auth_token", JSON.stringify(userData), { expires: 1 });
      setEmail(email);
      setToken(auth_token);
      navigate("/");
    }
  };
  /* login submit handler end*/

  return (
    <Container>
      <StyledTextField
        variant="filled"
        label="Username"
        name="username"
        onChange={(e) => {
          onValueChange(e);
        }}
      />
      <PasswordInput variant="filled">
        <InputLabel>Password</InputLabel>
        <FilledInput
          type={showPassword ? "text" : "password"}
          name="password"
          onChange={(e) => {
            onValueChange(e);
          }}
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
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            sx={{ color: "secondary.light" }}
            // color="secondary.dark"
            // checked={jason}
            // onChange={handleChange}
            name="remember"
          />
        }
        sx={{ color: "secondary.light", marginLeft: "-70px" }}
        label={
          <Typography variant="span" style={{ fontSize: "0.5 rem" }}>
            Remember me for a month
          </Typography>
        }
      />
      <SignUpButton variant="contained" onClick={submitHandler}>
        Sign In
      </SignUpButton>
      <SignInText>
        Don't have an account? <span onClick={toggleLogin}>Sign Up</span>
      </SignInText>
    </Container>
  );
}

export default Login;
