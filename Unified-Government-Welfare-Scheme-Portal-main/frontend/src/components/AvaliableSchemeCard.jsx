// components/SchemeCard.jsx
import React from "react";
import "../styles/SchemeCard.css";

const SchemeCard = ({ scheme }) => {
    return (
        <div className="scheme-card">
            <h3>{scheme.name}</h3>
            <div className="card-buttons">
                <button onClick={() => alert("More info coming soon!")}>More Info</button>
                <button onClick={() => alert("Eligibility checker coming soon!")}>Check Eligibility</button>
                <button onClick={() => alert("Redirecting to application page...")}>Apply Now</button>
            </div>
        </div>
    );
};

export default SchemeCard;
