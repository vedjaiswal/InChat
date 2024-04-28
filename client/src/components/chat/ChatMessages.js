import React, { useState, useEffect, useRef } from 'react'
import { Box, List, styled } from '@mui/material'

//components
import SendText from './SendText'
import ReceiveText from './ReceiveText'
import ChatInput from './ChatInput'

//api
import { getAllMessages } from '../../service/api'

//images
import BackgroundImage from './../../images/bg-image.png'

//static data
// import { messages } from '../data/messages'


const MessageContainer = styled(List)`
    height : 80%;
    display : flex;
    flex-direction : column;
    gap : 0.2rem;
    padding : 5px;
    backgroundSize : cover;
    overflow : auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #Cae0fe;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }    
`

function ChatMessages({ currentFriend, token, socket}) {

  const [ messages, setMessages ] = useState([]);
  const [ arrivalMessage, setArrivalMessage ] = useState(null);

  const scrollRef = useRef(null);

  useEffect(()=>{
    async function getMessages() {
      let response = await getAllMessages(token, currentFriend.friendId);
      console.log(response)
      setMessages(response.data);
    }
    if (token !== "") getMessages();
  }, [currentFriend])

  useEffect(()=>{
    if(socket.current){
      socket.current.on("Message:receive", (msg)=>{
        setArrivalMessage({ fromSelf : false, message : msg})
      })
    }
  }, [socket])

  useEffect(()=>{
    if(arrivalMessage){
      setMessages((prev)=> [...prev, arrivalMessage])
    }
  }, [arrivalMessage])

  useEffect(()=>{
    // console.log(scrollRef.current)

    scrollRef.current?.scrollIntoView({ behavior : "smooth", block : "center", inline : "end" })
  }, [messages])

  return (
    <>
    <MessageContainer  style={{backgroundImage : `url(${BackgroundImage})`}}>
      {messages.map((msg, index) => (
        msg.fromSelf ? <SendText ref={scrollRef} text={msg.message} /> : <ReceiveText ref={scrollRef} text={msg.message} />
      ))}
    </MessageContainer>
    <ChatInput currentFriend={currentFriend} token={token} socket={socket} setMessages={setMessages} />
    </>
  )
}

export default ChatMessages