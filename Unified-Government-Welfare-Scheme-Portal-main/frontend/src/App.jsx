
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WelfarePortal from './pages/LandingPage/LandingPage'  
import './App.css'


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/WelfarePortal" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/home" element={<HomePage />} />  Add HomePage Route */}
      </Routes>
    </Router>
  );
}
export default App;
