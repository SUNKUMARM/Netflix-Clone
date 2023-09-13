import React, { useState } from "react";
import "./loginPage.css";
import banner from "../../../components/assets/banner.jpg";
import logo from "../../../components/assets/Netflix_Logo.png";
import Footer from "../footer/Footer";
import LanguageOption from "../../navbar/landingPageNav/LanguageOption";
import { useNavigate } from "react-router-dom";
import InputField from "../../inputField/InputField";
import { useAuthContext } from "../../../context/AuthContext";

const LoginPage = () => {
  const { logIn } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setError("");
    try {
      await logIn(email, password);
      navigator("/movies");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="login-semi-container">
        <div className="login-logo-nav">
          <img
            className="login-logo"
            src={logo}
            alt="logo"
            onClick={() => navigator("/")}
          />
        </div>
        <div className="login-grand-parent login-flex ">
          <div className="login-parent login-flex ">
            <form className="login login-flex " onSubmit={handleSubmit}>
              <h1 className="login-title">Sign In</h1>
              {error && <p style={{ padding: "5px", color: "red" }}>{error}</p>}
              <span className="input-parent login-flex ">
                <InputField
                  placeholder="Email adders"
                  type="email"
                  required
                  className="input-box"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                />
                <InputField
                  placeholder="Password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  className="input-box"
                />
              </span>
              <div className="login-remember login-flex ">
                <InputField
                  value="Sign in"
                  type="submit"
                  className="input-sign-in"
                />
                <div className="remember login-flex">
                  <span className="login-checkbox login-flex ">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                    <p>Remember me</p>
                  </span>
                  <p>Need help?</p>
                </div>
              </div>
            </form>
            <div className="login-description">
              <h4 className="login-sign-up">
                New to Netflix?{" "}
                <b className="bold" onClick={() => navigator("/signUp")}>
                  {" "}
                  Sign up now.
                </b>
              </h4>
              <p className="content-learn">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
                <button className="learn-more" onClick={() => setShow(!show)}>
                  Learn more
                </button>
              </p>
              {show && (
                <p className="learn-more-description">
                  The information collected by Google reCAPTCHA is subject to
                  the Google Privacy Policy and Terms of Service, and is used
                  for providing, maintaining, and improving the reCAPTCHA
                  service and for general security purposes (it is not used for
                  personalised advertising by Google).
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="login-footer login-flex ">
          <p>
            Questions? Call <span>000-800-919-1694</span>
          </p>
          <div className="login-footer-content">
            <Footer content="FAQ" />
            <Footer content="Help Centre" />
            <Footer content="Terms of Use" />
            <Footer content="Privacy" />
            <Footer content="Cookie Preferences" />
            <Footer content="Corporate Information" />
          </div>
          <span className="language">
            <LanguageOption />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
