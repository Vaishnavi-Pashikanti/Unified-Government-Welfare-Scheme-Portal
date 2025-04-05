import React from "react";

const UploadBox = ({ title, name }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Upload to MongoDB backend using FormData or API call
        console.log(`${name} file selected:`, file);
    };

    return (
        <div className="upload-box">
            <h3>{title}</h3>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
};

export default UploadBox;
