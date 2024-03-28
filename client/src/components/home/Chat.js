import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Cookies from "js-cookie";

function Chat() {
  const { token, email } = useContext(DataContext);
  const handleLogout = ()=>{
    Cookies.remove('auth_token');
  }
  return (
    <>
      <button onClick={handleLogout}>logout</button>
      <div>Chat</div>
      <h2>{token}</h2>
      <h2>{email}</h2>
    </>
  );
}

export default Chat;
