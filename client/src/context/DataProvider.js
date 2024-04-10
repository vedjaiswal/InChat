import React, { useState, useEffect } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";

export const DataContext = createContext(null);

function DataProvider({ children }) {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const userCookie = Cookies.get("auth_token");
    if (userCookie) {
      const user = JSON.parse(userCookie);
      setUsername(user.username);
      setToken(user.auth_token);
    }
}, []);

  return (
    <DataContext.Provider
      value={{
        username,
        setUsername,
        token,
        setToken,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
