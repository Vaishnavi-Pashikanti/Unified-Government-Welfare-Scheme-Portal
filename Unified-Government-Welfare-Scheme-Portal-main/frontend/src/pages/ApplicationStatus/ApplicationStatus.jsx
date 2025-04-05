// src/pages/ApplicationStatus.jsx

import React from "react";
import SchemeCard from "../../components/SchemeCard"; // Fixed relative path
import "../../styles/SchemeCard.css";          // Ensure the CSS file exists

const ApplicationStatus = () => {
    const schemes = [
        {
            appNo: "UGWS2025PM12345",
            schemeName: "Post Matric Scholarship for Economically Backward Students",
            status: "Submitted"
        },
        {
            appNo: "UGWS2025KL67890",
            schemeName: "Kalyana Lakshmi Scheme for SC/ST Brides",
            status: "Document Issue",
            subStatus: "Document Pending / Missing / Ineligible"
        },
        {
            appNo: "UGWS2025AY11223",
            schemeName: "ArogyaSri Health Scheme for BPL Families",
            status: "Submitted"
        },
        {
            appNo: "UGWS2025RB33445",
            schemeName: "Rythu Bandhu Investment Support Scheme",
            status: "Selected For Next Round"
        },
        {
            appNo: "UGWS2025PMAY55667",
            schemeName: "PMAY – Pradhan Mantri Awas Yojana (Urban Housing Scheme)",
            status: "Submitted"
        },
    ];

    return (
        <div className="application-status-page">
            {/* Sidebar can be added here later */}
            <div className="main-content">
                <h2>Application Status</h2>
                <div className="scheme-list">
                    {schemes.map((scheme, index) => (
                        <SchemeCard key={index} {...scheme} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApplicationStatus;
