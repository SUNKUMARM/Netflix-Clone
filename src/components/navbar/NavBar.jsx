import React from "react";
import logo from "../assets/Netflix_Logo.png";
import avatar from "../assets/profile.png";
import "./navbar.css";
import { useNetflixContext } from "../../context/NetflixContextProvider";

const NavBar = () => {
  const { navLists } = useNetflixContext();
  return (
    <div className="navbar">
      <div className="navbar-lists">
        <img className="navbar-logo" src={logo} alt="Netflix logo" />
        <div className="navbar-list">
          {navLists.map((list) => (
            <li key={list.id}>{list.title}</li>
          ))}
        </div>
      </div>
      <div className="navbar-second-list">
        <img className="navbar-avatar" src={avatar} alt="Netflix logo" />
        <button className="navbar-button">Log Out</button>
      </div>
    </div>
  );
};

export default NavBar;
