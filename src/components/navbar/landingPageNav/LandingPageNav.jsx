import React from "react";
import { PiGlobeLight } from "react-icons/pi";
import logo from "../../../components/assets/Netflix_Logo.png";
import "./landingPageNav.css";
import { IoMdArrowDropdown } from "react-icons/io";

const LandingPageNav = () => {
  return (
    <div className="landing-page-nav">
      <img className="landing-page-nav-logo" src={logo} alt="logo" />
      <div className="landing-page-nav-sublist">
        <div className="landing-page-nav-list">
          <PiGlobeLight className="landing-page-icon" />
          <select name="English" defaultValue="English" className="nav-options">
            <option value="English">English</option>
            <option value="हिंदी">हिंदी</option>
          </select>
          <IoMdArrowDropdown className="landing-page-icon-two" />
          <button className="nav-button">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPageNav;
