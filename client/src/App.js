import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./login/Register"
import Login from "./login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Addition from './math/Addition';
import Subtraction from "./math/Substraction";
import Multiplication from "./math/Multiplication";
import Division from "./math/Division";




function App() {

  return (
    <>
      
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/addition" element={<Addition />} />
          <Route path="/subtraction" element={<Subtraction/>}/>
          <Route path="/multiplication" element={<Multiplication/>}/>
          <Route path="/division" element={<Division/>}/>
        </Routes>
      </Router>
      </div>
    </>
    
  )
}

export default App;