import React, {useEffect, useState} from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function Home() {
  return(
    <p>home</p>
  );
}

function About() {
  return(
    <p>about</p>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;