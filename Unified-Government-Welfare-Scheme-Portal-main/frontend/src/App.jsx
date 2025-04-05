import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import WelfarePortal from './pages/LandingPage/LandingPage';
import HomePage from './pages/Home/Home';
import './App.css';
import ApplicationStatus from "./pages/ApplicationStatus/ApplicationStatus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/WelfarePortal" />} />
        <Route path="/WelfarePortal" element={<WelfarePortal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/application" element={<ApplicationStatus />} />
      </Routes>
    </Router>
  );
}

export default App;

