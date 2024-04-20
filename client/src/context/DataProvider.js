import React, { useState, useEffect } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";

export const DataContext = createContext(null);

function DataProvider({ children }) {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [currentChat, setCurrentChat] = useState({});

  useEffect(() => {
    const userCookie = Cookies.get("auth_token");
    if (userCookie) {
      const user = JSON.parse(userCookie);
      setUser(user.user);
      setToken(user.auth_token);
      // console.log(user.user)
    }
}, []);

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        currentChat, 
        setCurrentChat,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
