import React from 'react'
import { styled, Box } from '@mui/material'

//components
import Chat from '../chat/Chat'
import Header from '../contacts/Header'

//images
import BackgroundImage from './../../images/bg-image.png'

const Container = styled(Box)`
 height : 100vh;
 width : 100vw;
 display : flex;
 justify-content: center;
 align-items : center;
 background-size : cover;
`

const MainContainer = styled(Box)`
  height : 95vh;
  width : 95vw;
  background-color : #040404;
  display : flex
`
const LeftContainer = styled(Box)(({theme})=>({
    height: "95vh",
    width : "30vw",
    backgroundColor : theme.palette.dark
}))

const RightContainer = styled(Box)({
    height: "95vh",
    width : "65vw",
    backgroundColor : "#489274"
})

function Home() {
  return (
    <Container style={{backgroundImage : `url(${BackgroundImage})`}}>
        <MainContainer>
            <LeftContainer>
              <Header/>
              User section
            </LeftContainer>
            <RightContainer> chat section</RightContainer>
        </MainContainer>
    </Container>
  )
}

export default Home