import React, { useEffect, useState } from "react";
import logo from "../assets/Netflix_Logo.png";
import avatar from "../assets/profile.png";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { useAuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const { logOut } = useAuthContext();
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
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

  useEffect(() => {
    const handleScreen = () => {
      const element = document.getElementById("myElement");
      const screenWidth = window.innerWidth;

      if (screenWidth < 760) {
        element.style.display = "none";
      } else {
        element.style.display = "flex";
      }
    };
    handleScreen();
    window.addEventListener("resize", handleScreen);
  }, []);

  const handleView = () => {
    setView(!view);
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      navigator("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={`navbar ${show && "navbar-black"}`}>
        <div className="navbar-lists">
          <img
            className="navbar-logo"
            src={logo}
            alt="Netflix logo"
            onClick={() => navigator("/movies")}
          />
          <div className="navbar-list">
            <div
              className={`navbar-menu ${view && "navbar-menu-click"}`}
              onClick={handleView}
            >
              <p className="navbar-menu-browse">Browse</p>
              <span className="navbar-menu-icon">
                <AiFillCaretDown />
              </span>
            </div>
            {view && (
              <div className="list-content">
                <p onClick={() => navigator("/movies")}>Home</p>
                <p onClick={() => navigator("/myList")}>My List</p>
                <p onClick={() => navigator("/search")}>Search</p>
              </div>
            )}
            <div id="myElement">
              <p onClick={() => navigator("/movies")}>Home</p>
              <p onClick={() => navigator("/myList")}>My List</p>
              <p onClick={() => navigator("/search")}>Search</p>
            </div>
          </div>
        </div>
        <div className="navbar-second-list">
          <img className="navbar-avatar" src={avatar} alt="Netflix logo" />
          <button className="navbar-button" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
