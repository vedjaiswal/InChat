import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import Cookies from "js-cookie";

function Chat() {
  
  const [ currentFriend, setCurrentFriend ] = useState('');

  
  return (
    <div>Chat with {currentFriend}</div>
  );
}

export default Chat;
