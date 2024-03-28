import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/login/Register.js";
import Chat from "./components/home/Chat";
import { ThemeProvider } from "@emotion/react";
import { theme } from './theme.js'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Register />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
