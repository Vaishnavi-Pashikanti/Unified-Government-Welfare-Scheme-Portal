import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import ProfileInfoBox from "../../components/ProfileInfoBox";
import UploadBox from "../../components/UploadBox";
import "../../styles/Profile.css";

const Profile = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const triggerFileInput = () => {
        document.getElementById("profileUploadInput").click();
    };

    return (
        <div className="profile-container">
            <Sidebar />
            <div className="profile-content">
                <h2>My Profile</h2>
                 <br />
                <div className="top-section">
                    <div className="profile-pic" onClick={triggerFileInput}>
                        {preview ? (
                            <img src={preview} alt="Profile Preview" />
                        ) : (
                            <div className="placeholder">Upload Photo</div>
                        )}
                        <input
                            type="file"
                            id="profileUploadInput"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: "none" }}
                        />
                    </div>
                    <ProfileInfoBox />
                </div>

                <div className="upload-sections">
                    <UploadBox title="Aadhar Card" second="Aadhar Card Number" name="aadhar" />
                    <UploadBox title="PAN Card" second="PAN Card Number" name="education" />
                    <UploadBox title="Income Info" second="Occupation" name="income" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
