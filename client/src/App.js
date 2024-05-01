import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./login/Register"
import Login from "./login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Addition from './math/Addition';




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
        </Routes>
      </Router>
      </div>
    </>
    
  )
}

export default App;