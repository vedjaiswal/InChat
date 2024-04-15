import React from 'react'
import { Box, List, styled } from '@mui/material'

//components
import SendText from './SendText'
import ReceiveText from './ReceiveText'

//images
import BackgroundImage from './../../images/bg-image.png'

//static data
import { messages } from '../data/messages'


const MessageContainer = styled(List)({
    height : "80%",
    display : "flex",
    flexDirection : "column",
    gap : '0.2rem',
    padding : 5,
    backgroundSize : "cover",
})

function ChatMessages() {
  return (
    <MessageContainer style={{backgroundImage : `url(${BackgroundImage})`}}>
      {messages.map((msg, index) => (
        msg.my ? <SendText text={msg.text} /> : <ReceiveText text={msg.text} />
      ))}
    </MessageContainer>
  )
}

export default ChatMessages