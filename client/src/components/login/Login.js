import React, {useState} from 'react'
import {TextField, styled, Box, FormControl, FilledInput, InputLabel, InputAdornment, IconButton, Button, Typography} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import BackgroundImage from '../../images/login_bg.png'
import Logo from '../../images/inchat_logo.png'
import ChattingImageGIF from '../../images/Chatting.gif'

const RightContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items : center;
  flex-direction : column;
  gap : 1rem;
  grid-area : right;
  // position : absolute;
  // width : 50%;
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
  background-color : #fff;
  border-radius : 20px;
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
  marginLeft:'36%',
  height: 80,
  position:'absolute'
})

const ChattingImage = styled('img')`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -20px;
  transform: scale(1.5);
  object-fit: cover;
`

const PasswordInput = styled(FormControl)({
  "& .MuiFilledInput-root:after" : {
    borderBottomColor : "#040404"
  }, 
  "& .Mui-focused":{
    color : "#040404", 
    borderColor : "#040404"
  },
  "& label.Mui-focused" : {
    color : "#040404"
  }
})

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#040404"
  },
  // "& .MuiInput-underline:after": {
  //   borderBottomColor: "#040404"
  // },
  "& .MuiFilledInput-root:after" : {
    borderBottomColor:"#040404"
  },
  "& .MuiInput-underline": {
    borderBottomColor: "#040404"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#040404"
    },
    "&:hover fieldset": {
      borderColor: "#040404",
      borderWidth: 2
    },
    "&.Mui-focused fieldset": {
      borderColor: "#040404"
    }
  }
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
// MuiInputBase-root-MuiFilledInput-root:after


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
            <StyledTextField sx={{width : 220}} variant='filled' label='Name' />
            <StyledTextField style={{width : 220}} variant='filled' type='email' label='Email Address' />
            <PasswordInput fullWidth sx={{ m: 1, width: '25ch' }} variant='filled'>
              <InputLabel>Password</InputLabel>
              <FilledInput
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </PasswordInput>
            <PasswordInput style={{margin:0}} sx={{ m: 1, width: '25ch' }} variant="filled">
              <InputLabel>Confirm Password</InputLabel>
              <FilledInput
                type={showConfirmPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowConfirmPassword}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </PasswordInput>
            <Button variant="contained">Sign Up</Button>
            <Typography>Already have an account? <span>Sign In</span></Typography>            
        </RightContainer>
      </FormContainer>
    </Container>
  )
}

export default Login