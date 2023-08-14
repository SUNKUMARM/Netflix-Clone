import React from "react";
import { PiGlobeLight } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";

const LanguageOption = () => {
  return (
    <div className="landing-page-nav-list">
      <PiGlobeLight className="landing-page-icon" />
      <select name="English" defaultValue="English" className="nav-options">
        <option value="English">English</option>
        <option value="हिंदी">हिंदी</option>
      </select>
      <IoMdArrowDropdown className="landing-page-icon-two" />
    </div>
  );
};

export default LanguageOption;
