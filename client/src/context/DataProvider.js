import React, { useState, useEffect } from 'react'
import { createContext } from 'react';
import Cookies from 'js-cookie';

export const DataContext = createContext(null);

function DataProvider({children}) {

    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')

    useEffect(() => {
        const userCookie = Cookies.get('auth_token');
        if(userCookie){
            const user = JSON.parse(userCookie);
            setEmail(user.email);
            setToken(user.auth_token);
        }
      }, [])

  return (
    <DataContext.Provider value={{
        email, 
        setEmail,
        token,
        setToken
    }}>
        {children} 
    </DataContext.Provider>
  )
}

export default DataProvider