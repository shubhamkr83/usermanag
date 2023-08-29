import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbord from './Dashbord'
import Navbar from "./components/Navbar"
import Login from "./Login"
import Signup from "./Signup"


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
