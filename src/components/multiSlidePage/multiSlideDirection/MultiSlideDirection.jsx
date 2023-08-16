import React from "react";
import "./multiSlideDirection.css";

const MultiSlideDirection = ({ title, paragraph, image }) => {
  return (
    <div className="direction-parent">
      <div className="multi-slide-text">
        <h1 className="multi-head-title">{title}</h1>
        <p className="multi-head-description">{paragraph}</p>
      </div>
      <img className="slide-image" src={image} alt="tv-img" />
    </div>
  );
};

export default MultiSlideDirection;
