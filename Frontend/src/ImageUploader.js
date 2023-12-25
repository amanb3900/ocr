// ImageUploader.js
import React, { useState } from 'react';
import './ImageUploader.css';
import {Link} from 'react-router-dom'
const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [extractedInfo, setExtractedInfo] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      setSelectedImage(URL.createObjectURL(imageFile));
    }
  };
  
  const handleExtractInfo = () => {
    // Dummy extracted information for demonstration purposes
    // const dummyInfo = 'Sample extracted information';
    // setExtractedInfo(dummyInfo);
  };
 const handleGet = () => {
  
 }
  return (
    <div className="image-uploader-container">
    <h1>Optical Character Recognization</h1>
    <h4>(First Upload an Image)</h4>
    <form action="http://localhost:5000/api/extract/add" method="post" enctype="multipart/form-data">
      <label className="upload-image">
     
        <input name='uploaded_file' id='uploaded_file' type="file" onChange={handleImageChange} accept="image/*" style={{ display: 'none' }} />
     
        {!selectedImage ? (
          <p>Upload an image</p>
        ) : (
          <div className="image-preview">
            <img src={selectedImage} alt="Selected" className="selected-image" />
          </div>
        )}
      </label>
      <button onClick={handleExtractInfo} className="extract-info-btn">Extract Information</button>
      <Link
  to="/getall"
  style={{
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: '4px',
    display: 'inline-block',
    marginTop: '20px',
    marginRight: '10px',  // Add right margin for space
    marginBottom: '20px', // Add bottom margin for space
    marginLeft: '10px',   // Add left margin for space
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out'
  }}
>
  History
</Link>


    </form>
      {extractedInfo && <p>{extractedInfo}</p>}
  </div>
  );
};

export default ImageUploader;
