import React, { useState } from "react";
import banner from "../../../components/assets/banner.jpg";
import logo from "../../../components/assets/Netflix_Logo.png";
import { useNavigate } from "react-router-dom";
import InputField from "../../inputField/InputField";
import Footer from "../footer/Footer";
import LanguageOption from "../../navbar/landingPageNav/LanguageOption";
import { useAuthContext } from "../../../context/AuthContext";
import "./signUp.css";

const SignUp = () => {
  const { user, signUp } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setError("");
    try {
      await signUp(email, password);
      navigator("/");
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
              <h1 className="login-title">Register</h1>
              {error && <p style={{ padding: "5px", color: "red" }}>{error}</p>}
              <span className="input-parent login-flex ">
                <InputField
                  placeholder="Email adders"
                  type="email"
                  id="email"
                  required
                  className="input-box"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  value={email}
                />
                <InputField
                  id="password"
                  placeholder="Password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  value={password}
                  className="input-box"
                />
              </span>
              <div className="login-remember login-flex ">
                <InputField
                  value="Sign up"
                  type="submit"
                  className="input-sign-in"
                />
              </div>
            </form>
            <div className="login-description">
              <h4 className="login-sign-up">
                Already subscribed to Netflix?{" "}
                <b className="bold" onClick={() => navigator("/")}>
                  {" "}
                  Sign in now.
                </b>
              </h4>
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

export default SignUp;
