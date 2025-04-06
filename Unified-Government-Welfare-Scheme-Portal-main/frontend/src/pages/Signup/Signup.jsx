import React, { useState } from "react";
import "../../styles/Signup.css";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash, FaLock,FaPhone, FaCity,FaBirthdayCake, FaTransgender } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ import this
  
const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
    };
    const handleSignup = (e) => {
        e.preventDefault();
    
        // Basic password match check
        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }
    
        console.log("Signup successful!");
        navigate("/home"); 
      };

    return (
        <div className="signup-body">
            <div className="signup-container">
                <form className="signup-form" onSubmit={handleSignup}>
                    <h2>Create Account</h2>

                    <div className="name">
                        <div className="input-container">
                            <FaUser className="icon" />
                            <input type="text" placeholder="Firstname" className="iname" required />
                        </div>
                        <div className="input-container">
                            <FaUser className="icon" />
                            <input type="text" placeholder="Lastname" className="iname" required />
                        </div>
                    </div>

                    <div className="input-container">
                        <FaUser className="icon" />
                        <input type="text" placeholder="Username" className="ip" required />
                    </div>

                    <div className="input-container">
                        <FaEnvelope className="icon" />
                        <input type="email" placeholder="Email" className="ip" required />
                    </div>

                    {/* Phone Number Field */}
                        <div className="input-container">
                            <FaPhone className="icon" />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="ip"
                                pattern="[0-9]{10}"
                                title="Enter a 10-digit phone number"
                                required
                            />
                        </div>

                        {/* Age Field */}
                        <div className="input-container">
                            <FaBirthdayCake className="icon" />
                            <input
                                type="number"
                                placeholder="Age"
                                className="ip"
                                min="0"
                                required
                            />
                        </div>

                        {/* Gender Field */}
                        <div className="input-container">
                            <FaTransgender className="icon" />
                            <select className="ip" required>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* City Field */}
                        <div className="input-container">
                            <FaCity className="icon" />
                            <input
                                type="text"
                                placeholder="City"
                                className="ip"
                                required
                            />
                        </div>
                    {/* Password Field */}
                    <div className="input-container">
                        <FaLock className="icon" />
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

                    {/* Confirm Password Field */}
                    <div className="input-container">
                        <FaLock className="icon" />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="ip"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <span className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <div className="terms">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">I agree to the terms and conditions</label>
                    </div>

                    <button type="submit">Sign Up</button>

                    <div className="socialDivider"><span>or</span></div>

                    <div className="social-login">
                        <a href="/auth/google">
                            <img src="/icons/google.png" alt="Google Login" className="social-icon" />
                        </a>
                    </div>

                    <p className="have-acc">Already have an account? <a href="/login">Login</a></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
