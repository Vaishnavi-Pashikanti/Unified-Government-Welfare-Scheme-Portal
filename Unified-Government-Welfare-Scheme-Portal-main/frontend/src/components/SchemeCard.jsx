import React from "react";
import "../styles/SchemeCard.css"; 

const SchemeCard = ({ appNo, schemeName, status, subStatus }) => {
    const statusColors = {
        "Submitted": "green",
        "Selected For Next Round": "blue",
        "Document Issue": "red",
        "Document Pending/Missing/Ineligible": "purple",
    };

    return (
        <div className="scheme-card">
            <div className="dot-line"></div>
            <div className="scheme-content">
                <p><strong>Application No.:</strong> {appNo}</p>
                <p>{schemeName}</p>
                <div className="status-tags">
                    {status && <span className={`status-tag ${statusColors[status]}`}>{status}</span>}
                    {subStatus && <span className={`status-tag ${statusColors[subStatus]}`}>{subStatus}</span>}
                </div>
            </div>
        </div>
    );
};

export default SchemeCard;
