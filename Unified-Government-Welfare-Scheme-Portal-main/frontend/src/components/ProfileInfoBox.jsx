import React from "react";
import '../styles/UploadBox.css'

const ProfileInfoBox = () => {
    // These would be fetched from backend based on logged-in user
    const user = {
        firstname: "Sathwika",
        lastname: "Bachu",
        email: "sathwika@example.com",
        phone: "9876543210",
        age: 20,
        gender: "Female",
        city: "Hyderabad"
    };

    return (
        <div className="profile-info-box">
            <h3>Personal Info</h3>
            <p><strong>Name:</strong> {user.firstname} {user.lastname}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>City:</strong> {user.city}</p>
        </div>
    );
};

export default ProfileInfoBox;
