import React from "react";
import "./notFound.css";
import logo from "../../../components/assets/Netflix_Logo.png";
import not from "../../../components/assets/not_found.png";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img className="netflix-logo" src={logo} alt="logo" />
      <div
        className="not-found-parent"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${not})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="not-found-content-outer">
          <div className="not-found-content">
            <h1 className="not-fount-title">Lost your way?</h1>
            <h4 className="not-fount-description">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </h4>
            <button className="not-found-button">Netflix Home</button>
            <p className="not-found-error">
              Error Code <b>NSES-404</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
