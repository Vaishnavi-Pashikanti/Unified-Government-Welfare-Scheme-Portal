import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

import "../../styles/Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login successful! Navigating to Home...");
        navigate("/home");
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleGoogleLogin = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

    return (
        <div className="login-body">
            <div className="login-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Login</h2>

                    {/* Username Input */}
                    <div className="input-container">
                        <FaUser className="input-icon" />
                        <input
                            type="text"
                            placeholder="Username"
                            className="ip"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="input-container">
                        <FaLock className="input-icon" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="ip"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <div className="options">
                        <label className="rem">
                            <input type="checkbox" className="checkbox" /> Remember Me
                        </label>
                        <span className="fp">Forgot Password?</span>
                    </div>

                    <button type="submit">Login</button>

                    {/* Social Divider */}
                    <div className="socialDivider"><span>or</span></div>

                    <div className="social-login">
                        <a href="/auth/google">
                            <img src="/icons/google.png" alt="Google Login" className="social-icon" />
                        </a>

                    </div>

                    <p className="no-acc">
                        Don't have an account? <Link to="/signup">SIGN UP</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
