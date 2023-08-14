import React from "react";
import logo from "../../../components/assets/Netflix_Logo.png";
import "./landingPageNav.css";
import LanguageOption from "./LanguageOption";

const LandingPageNav = () => {
  return (
    <div className="landing-page-nav">
      <img className="landing-page-nav-logo" src={logo} alt="logo" />
      <div className="landing-page-nav-sublist">
        <div className="landing-page-nav-list">
          <LanguageOption />
          <button className="nav-button">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPageNav;
