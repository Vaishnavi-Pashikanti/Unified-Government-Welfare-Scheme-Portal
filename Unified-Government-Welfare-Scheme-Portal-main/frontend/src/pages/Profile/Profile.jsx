import React from "react";
import Sidebar from "../components/Sidebar";
import ProfileInfoBox from "../components/ProfileInfoBox";
import UploadBox from "../components/UploadBox";
import "../styles/Profile.css";

const Profile = () => {
    return (
        <div className="profile-container">
            <Sidebar />
            <div className="profile-content">
                <h2>My Profile</h2>

                <div className="top-section">
                    <div className="profile-pic">
                        <img src="/path/to/profile-pic.jpg" alt="Profile" />
                        <input type="file" />
                    </div>
                    <ProfileInfoBox />
                </div>

                <div className="upload-sections">
                    <UploadBox title="Aadhar Card" name="aadhar" />
                    <UploadBox title="Educational Info" name="education" />
                    <UploadBox title="Income Info" name="income" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
