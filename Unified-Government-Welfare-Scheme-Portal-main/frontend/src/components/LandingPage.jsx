import React, { useState } from "react";
import "./LandingPage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import healthcareImg from "../assets/healthcare.jpeg";
import farmersImg from "../assets/farmers.jpeg";
import logo from "../assets/logo.png";
import womenEntrepreneurImg from "../assets/women-entrepreneur.jpeg";

const popularSchemes = [
  { id: 4, title: "Healthcare for All Initiative", eligibility: "All citizens", category: "Healthcare" },
  { id: 5, title: "Farmer Support Program", eligibility: "Active farmers with land", category: "Agriculture" },
  { id: 6, title: "Women Entrepreneurship Grant", eligibility: "Women entrepreneurs", category: "Business" }
];

const LandingPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  const handleApplyClick = (e) => {
    e.preventDefault();
    setShowAuthPopup(true);
  };

  return (
    <div className="landing-container">
      <nav>
        <img src={logo}  alt="" className='logo'/>
        <ul className='nav-list'>
          <li><a href="">Home</a></li>
          <li><a href="">Schemes</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
        <ul className='log-list'>
          <li><a href="">Login</a></li>
          <li><a href="">Register</a></li>
        </ul> 
      </nav>

      <h1 style={{ textAlign:"center"}}>Unified Government Welfare Scheme Portal</h1>
      {/* 🔍 Search and Filters Section */}
      <div className="search-filter-bar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search scholarships and other education funding opportunities"
          />
        </div>

        <div className="filter-fields">
          <input type="number" placeholder="Age" min="1" max="120" />
          <select defaultValue="">
            <option value="" disabled>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="text" placeholder="City" />
          <button className="apply-filter-btn">Apply Filters</button>
        </div>
      </div>


      {/* 🖼️ Carousel Section */}
      <section className="carousel-section">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div className="scheme-slide">
            <img src={healthcareImg} alt="Healthcare" />
            <div className="slide-text">
              <h3>Healthcare for All Initiative</h3>
              <p><strong>Eligibility:</strong> All citizens</p>
              <p><strong>Category:</strong> Healthcare</p>
              <a href="#" className="apply-btn" onClick={handleApplyClick}>Apply Now</a>
            </div>
          </div>

          <div className="scheme-slide">
            <img src={farmersImg} alt="Farmers" />
            <div className="slide-text">
              <h3>Farmer Support Program</h3>
              <p><strong>Eligibility:</strong> Active farmers with land</p>
              <p><strong>Category:</strong> Agriculture</p>
              <a href="#" className="apply-btn" onClick={handleApplyClick}>Apply Now</a>
            </div>
          </div>

          <div className="scheme-slide">
            <img src={womenEntrepreneurImg} alt="Women Entrepreneurs" />
            <div className="slide-text">
              <h3>Women Entrepreneurship Grant</h3>
              <p><strong>Eligibility:</strong> Women entrepreneurs</p>
              <p><strong>Category:</strong> Business</p>
              <a href="#" className="apply-btn" onClick={handleApplyClick}>Apply Now</a>
            </div>
          </div>
        </Carousel>
      </section>

      <div><br /></div>

      {/* 🌟 Popular Schemes Section */}
      <section className="schemes-section" id="schemes">
        <h2>Popular Schemes</h2>
        <div className="schemes-grid">
          {popularSchemes.map((scheme) => (
            <div key={scheme.id} className="scheme-card">
              <h3>{scheme.title}</h3>
              <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
              <p><strong>Category:</strong> {scheme.category}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="landing-footer">
        &copy; 2025 Unified Government Welfare Portal. All Rights Reserved.
      </footer>

      {/* 🔐 Login/Register Popup */}
      {showAuthPopup && (
        <div className="auth-popup-overlay">
          <div className="auth-popup">
            <h2>Hold up! 🔐</h2>
            <p>You need to login or register to apply for a scheme.</p>
            <div className="popup-buttons">
              <a href="#login" className="popup-btn login-btn">Login</a>
              <a href="#register" className="popup-btn register-btn">Register</a>
            </div>
            <button onClick={() => setShowAuthPopup(false)} className="close-btn">×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
