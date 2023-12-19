import React, {useState} from 'react'
import {TextField, styled, Box, FormControl, FilledInput, InputLabel, InputAdornment, IconButton, Button, Typography} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import { grey } from '@mui/material/colors';
import BackgroundImage from '../../images/sun-tornado.png'
import Logo from '../../images/inchat_logo.png'
import ChattingImageGIF from '../../images/Chatting.gif'

const RightContainer = styled(Box)`
  display: flex;
  width : 400px;
  justify-content: center;
  align-items : center;
  flex-direction : column;
  gap : 1rem;
  grid-area : right;
`
const Container = styled(Box)`
 height : 100vh;
 width : 100vw;
 display : flex;
 justify-content: center;
 align-items : center;
 background-size : cover;
`
const FormContainer = styled(Box)`
  height : 600px;
  width : 1000px;
  display: grid;
  position : relative;
  background-color : #040404;
  border-radius : 20px;
//   -webkit-box-shadow: 8px 8px 20px -3px rgba(81,85,90,1);
// -moz-box-shadow: 8px 8px 20px -3px rgba(81,85,90,1);
// box-shadow: 8px 8px 20px -3px rgba(81,85,90,1);
-webkit-box-shadow: 8px 8px 20px -3px rgba(4,4,4,1);
-moz-box-shadow: 8px 8px 20px -3px rgba(4,4,4,1);
box-shadow: 8px 8px 20px -3px rgba(4,4,4,1);
  grid-template-areas : 
    'logo logo'
    'left right'
    'left right';
  
`

const LeftContainer = styled(Box)`
  grid-area : left;
  overflow : hidden;
  border-radius : 0px 0px 0px 20px;
`
const Header = styled(Box)`
  grid-area : logo;
  height : 90px;
`
const HeaderImage = styled('img')({
  marginLeft:'35%',
  height: 120,
  position:'absolute'
})

const ChattingImage = styled('img')`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -80px;
  transform: scale(1.5);
  object-fit: cover;
`
const SignUpButton = styled(Button)({
  textTransform : "none",
  backgroundColor : "#be905e",
  width:300,
  height:45,
  ":hover" :{
    backgroundColor : "#be905e"
  }
})

const SignInText = styled(Typography)({
  color : "#51555a",
  fontSize : 14,
  " > span" :{
    cursor : "pointer",
    textDecorationLine : "underline",
  },
  " > span:hover"  :{
    color : "#fff",
  }
})

const PasswordInput = styled(FormControl)({
  width:300,
  "& label.Mui-focused" : {
    color : "#424242"
  },
  "& label":{
    color : "#424242"
  },
  "& .MuiFilledInput-root" :{
    backgroundColor:"#111111",
    color : "#fff"
  },
  "& .MuiFilledInput-root.Mui-focused ":{
    backgroundColor : "#111111"
  },
  "& .MuiFilledInput-root:hover" : {
    backgroundColor : "#111111", 
    borderBottomColor: "#fff"
  },
  "& .MuiFilledInput-root:after" : {
    borderBottomColor : "#fff",
  }, 
  "& .MuiTouchRipple-root":{
    color : "#fff"
  }
  // "& .Mui-focused":{
  //   color : "#040404", 
  //   borderColor : "#040404",
  //   background : "#fff"
  // },
})

const StyledTextField = styled(TextField)({
  width : 300,
  "& label, label.Mui-focused": {
    color: "#424242"
  },
  // "& label":{
  //   color : "#424242"
  // },
  "& .MuiFilledInput-root" :{
    backgroundColor:"#111111",
    color : "#fff"
  },
  "& .MuiFilledInput-root.Mui-focused ":{
    backgroundColor : "#111111"
  },
  "& .MuiFilledInput-root:hover" : {
    backgroundColor : "#111111", 
    borderBottomColor: "#fff"
  },
  "& .MuiFilledInput-root:after" : {
    borderBottomColor:"#fff"
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
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  return (
    <Container style={{backgroundImage : `url(${BackgroundImage})`}}>
      <FormContainer>
        <Header>
          <HeaderImage src={Logo} alt='logo' />
        </Header>
        <LeftContainer>
          <ChattingImage src={ChattingImageGIF} alt="illustration" />
        </LeftContainer>
        <RightContainer>
            <StyledTextField  variant='filled' label='Name' />
            <StyledTextField  variant='filled' type='email' label='Email Address' />
            <PasswordInput variant='filled'>
              <InputLabel>Password</InputLabel>
              <FilledInput
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff sx={{ color: grey[800] }} /> : <Visibility sx={{ color: grey[800] }}/>}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </PasswordInput>
            <PasswordInput variant="filled">
              <InputLabel>Confirm Password</InputLabel>
              <FilledInput
                type={showConfirmPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowConfirmPassword}
                    >
                      {showConfirmPassword ? <VisibilityOff sx={{ color: grey[800] }} /> : <Visibility sx={{ color: grey[800] }} />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </PasswordInput>
            <SignUpButton variant="contained">Sign Up</SignUpButton>
            <SignInText>Already have an account? <span>Sign In</span></SignInText>            
        </RightContainer>
      </FormContainer>
    </Container>
  )
}

export default Login