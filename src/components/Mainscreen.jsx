import React from "react";
import mainscreen from "../images/mainscreen.jpg";

const ImageWithText = () => {
  return (
    <div className="image-container">
      <img src={mainscreen} alt="Image" className="image" />
      <div className="text-overlay">
        <h1 className="text">LinkedIn Pressroom</h1>
        <h2 className="text2">
          Stay on top of the latest news, updates, and reports.
        </h2>
        <h2 className="startExploring">Start Exploring</h2>
      </div>
    </div>
  );
};

export default ImageWithText;
