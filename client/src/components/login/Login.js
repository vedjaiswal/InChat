import React, {useState} from 'react'
import {TextField, styled, Box, FormControl, Input, InputLabel, InputAdornment, IconButton} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'

const FormContainer = styled(Box)`
  height : 100vh;
  display: flex;
  justify-content: center;
  align-items : center;
  flex-direction : column;
  gap : 1rem;
`
const Container = styled(Box)`

`

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);



  return (
    <Container>
        <FormContainer>
            <TextField style={{width : 220,}} variant='standard' label='Name' />
            <TextField style={{width : 220}} variant='standard' type='email' label='Email Address' />
            <FormControl style={{margin:0}} sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel>Password</InputLabel>
              <Input 
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
            </FormControl>
            <FormControl style={{margin:0}} sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel>Confirm Password</InputLabel>
              <Input
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
            </FormControl>
        </FormContainer>
    </Container>
  )
}

export default Login