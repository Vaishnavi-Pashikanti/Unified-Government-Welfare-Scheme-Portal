import React, { useState } from "react";
import "../../styles/Signup.css";
import {
  FaUser, FaEnvelope, FaEye, FaEyeSlash, FaLock, FaPhone, FaCity, FaBirthdayCake, FaTransgender
} from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    city: '',
    password: ''
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (res.ok) {
        alert("Signup successful");
      } else {
        alert("Signup failed: " + result.error);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev);

  return (
    <div className="signup-body">
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          <div className="name">
            <div className="input-container">
              <FaUser className="icon" />
              <input name="firstname" type="text" placeholder="Firstname" className="iname" required onChange={handleChange} />
            </div>
            <div className="input-container">
              <FaUser className="icon" />
              <input name="lastname" type="text" placeholder="Lastname" className="iname" required onChange={handleChange} />
            </div>
          </div>

          <div className="input-container">
            <FaUser className="icon" />
            <input name="username" type="text" placeholder="Username" className="ip" required onChange={handleChange} />
          </div>

          <div className="input-container">
            <FaEnvelope className="icon" />
            <input name="email" type="email" placeholder="Email" className="ip" required onChange={handleChange} />
          </div>

          <div className="input-container">
            <FaPhone className="icon" />
            <input name="phone" type="tel" placeholder="Phone Number" className="ip" pattern="[0-9]{10}" required onChange={handleChange} />
          </div>

          <div className="input-container">
            <FaBirthdayCake className="icon" />
            <input name="age" type="number" placeholder="Age" className="ip" min="0" required onChange={handleChange} />
          </div>

          <div className="input-container">
            <FaTransgender className="icon" />
            <select name="gender" className="ip" required onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="input-container">
            <FaCity className="icon" />
            <input name="city" type="text" placeholder="City" className="ip" required onChange={handleChange} />
          </div>

          <div className="input-container">
            <FaLock className="icon" />
            <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" className="ip" required onChange={handleChange} />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="input-container">
            <FaLock className="icon" />
            <input name="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="ip" required onChange={(e) => setConfirmPassword(e.target.value)} />
            <span className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
