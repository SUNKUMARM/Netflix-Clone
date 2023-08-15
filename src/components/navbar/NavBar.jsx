import React, { useEffect, useState } from "react";
import logo from "../assets/Netflix_Logo.png";
import avatar from "../assets/profile.png";
import "./navbar.css";
import { useNetflixContext } from "../../context/NetflixContextProvider";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { navLists } = useNetflixContext();
  const [show, setShow] = useState(false);
  const navigator = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${show && "navbar-black"}`}>
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
          <button className="navbar-button" onClick={() => navigator("/")}>
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
