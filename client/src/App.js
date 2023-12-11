import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/login/Login'
import Chat from './components/home/Chat'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App