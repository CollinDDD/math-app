import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./login/Register"
import Login from "./login/Login";
import Home from "./Home/Home"




function App() {

  return (
    <>
      
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register/>} />
          <Route path="home" element={<Home/>}/>
        </Routes>
      </Router>
      </div>
    </>
    
  )
}

export default App;