import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import Cookies from "js-cookie";

//components
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

function Chat() {
  
  const [ currentFriend, setCurrentFriend ] = useState('');

  
  return (
    <div style={{ height : "100%"}}>
      <ChatHeader/>
      <ChatMessages/>
      <ChatInput/>
    </div>
  );
}

export default Chat;
