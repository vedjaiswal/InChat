import React from 'react'
import { styled, Box } from '@mui/material'

//components
import Chat from '../chat/Chat'
import Header from '../contacts/Header'
import TabContainer from './../contacts/TabContainer'

//images
// import BackgroundImage from './../../images/bg-image.png'

const Container = styled(Box)`
 height : 100vh;
 width : 100vw;
 display : flex;
 justify-content: center;
 align-items : center;
 background-color : #010101;
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
    backgroundColor : theme.palette.light
}))

const RightContainer = styled(Box)(({theme})=>({
  height: "95vh",
  width : "65vw",
  backgroundColor : theme.palette.secondary.dark
}))

function Home() {
  return (
    <Container>
        <MainContainer>
            <LeftContainer>
              <Header/>
              <TabContainer/>
            </LeftContainer>
            <RightContainer> <Chat/> </RightContainer>
        </MainContainer>
    </Container>
  )
}

export default Home