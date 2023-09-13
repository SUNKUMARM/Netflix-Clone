import React from "react";
import logo from "../../../components/assets/Netflix_Logo.png";
import "./landingPageNav.css";
import LanguageOption from "./LanguageOption";
import { useNavigate } from "react-router-dom";

const LandingPageNav = () => {
  const navigator = useNavigate();
  return (
    <div className="landing-page-nav">
      <div className="landing-page-image-parent">
        <img className="landing-page-nav-logo" src={logo} alt="logo" />
      </div>
      <div className="landing-page-nav-sublist">
        <div className="landing-page-nav-list-two">
          <LanguageOption />
          <button className="nav-button" onClick={() => navigator("/login")}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPageNav;
