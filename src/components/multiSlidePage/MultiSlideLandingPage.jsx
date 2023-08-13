import React from "react";
import "./multiSlideLandingPage.css";

const MultiSlideLandingPage = ({
  title,
  paragraph,
  className,
  image,
  video,
  tvVideo,
}) => {
  return (
    <div className="multi-slide-parent">
      <div className={className}>
        <div className="multi-slide-text">
          <h1 className="multi-head-title">{title}</h1>
          <p className="multi-head-description">{paragraph}</p>
        </div>
        <div>
          <div className="image-parent">
            <img className="slide-image" src={image} alt="tv-img" />
          </div>
          {video && (
            <video className={tvVideo} src={video} autoPlay loop muted></video>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiSlideLandingPage;
