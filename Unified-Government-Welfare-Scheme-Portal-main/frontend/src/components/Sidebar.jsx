import React from "react";
import "../styles/Profile.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3>Menu</h3>
            <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
