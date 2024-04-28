import React, { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "../../context/DataProvider";
import Cookies from "js-cookie";


//socket
import { io } from 'socket.io-client'
 
//components
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";

function Chat() {
  
  const [ currentFriend, setCurrentFriend ] = useState('');
  const { currentChat, token } = useContext(DataContext);

  const socket = useRef();
  const host = "http://localhost:8000"


  useEffect(()=>{
    // console.log(currentChat)
    if(Object.keys(currentChat).length !== 0){
      // console.log(currentChat)
      setCurrentFriend(currentChat)
      socket.current = io(host);
      socket.current.emit("User:add", token)
      // console.log("token : ")
      // console.log(token)
    }
  }, [currentChat])

  
  return (
    <>
    {Object.keys(currentFriend).length !== 0 ? 
    <div style={{ height : "100%"}}>
      <ChatHeader currentFriend={currentFriend} />
      <ChatMessages currentFriend={currentFriend} token={token} socket={socket} />
    </div>
    : <div>select a friend to chat</div>
    }
    </>
  );
}

export default Chat;
