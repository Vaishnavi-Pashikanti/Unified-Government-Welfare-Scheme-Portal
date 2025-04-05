import React from "react";
import '../styles/UploadBox.css'

const UploadBox = ({ title, name , second}) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Upload to MongoDB backend using FormData or API call
        console.log(`${name} file selected:`, file);
    };

    return (
        <div className="upload-box">
            <h3>{title}</h3>
            <input type="text" placeholder={second} />
            <br /><br />
            <input type="file" onChange={handleFileChange} />
            <br /><br />
            <input type="button" value="Save" />
        </div>
    );
};

export default UploadBox;
