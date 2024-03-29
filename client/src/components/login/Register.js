import React, {useState} from 'react'
import {styled, Box} from '@mui/material'
import BackgroundImage from '../../images/sun-tornado.png'
import Logo from '../../images/inchat_logo.png'
import ChattingImageGIF from '../../images/Chatting.gif'

// import components
import Signup from './Signup.js'
import Login from './Login.js'

// const RightContainer = styled(Box)`
//   display: flex;
//   width : 400px;
//   justify-content: center;
//   align-items : center;
//   flex-direction : column;
//   gap : 1rem;
//   grid-area : right;
// `

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



function Register() {
  const [login, setLogin] = useState(true);

  const toggleLogin = () => {
    setLogin(prev => !prev);
  }

  return (
    <Container style={{backgroundImage : `url(${BackgroundImage})`}}>
      <FormContainer>
        <Header>
          <HeaderImage src={Logo} alt='logo' />
        </Header>
        <LeftContainer>
          <ChattingImage src={ChattingImageGIF} alt="illustration" />
        </LeftContainer>
        { login ? <Login toggleLogin={toggleLogin} /> : <Signup toggleLogin={toggleLogin} />}
        {/* <RightContainer>
            <StyledTextField  variant='filled' label='Name' />
            <StyledTextField  variant='filled' label='Username' />
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
                      {showPassword ? <VisibilityOff sx={{ color: "secondary.dark" }} /> : <Visibility sx={{ color: "secondary.dark" }}/>}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </PasswordInput>
            <SignUpButton variant="contained">Sign Up</SignUpButton>
            <SignInText>Already have an account? <span>Sign In</span></SignInText>            
        </RightContainer> */}
      </FormContainer>
    </Container>
  )
}

export default Register