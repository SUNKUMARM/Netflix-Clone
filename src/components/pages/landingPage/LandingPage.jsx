import React from "react";
import banner from "../../assets/banner.jpg";
import "./landingpage.css";
import LandingPageNav from "../../navbar/landingPageNav/LandingPageNav";
import InputFeild from "../../inputFeild/InputFeild";
import { MdArrowForwardIos } from "react-icons/md";

const LandingPage = () => {
  return (
    <div>
      <div
        className="landing-page-banner "
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center center",
        }}
      >
        <LandingPageNav />
        <div className="fade ">
          <div className="landing-page-contents">
            <h1 className="landing-page-title">
              Unlimited movies, TV shows and more
            </h1>
            <h2 className="landing-page-subtitle">
              Watch anywhere. Cancel anytime.
            </h2>
            <h3 className="landing-page-description">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="input">
              <InputFeild
                className="input-email"
                type="email"
                placeholder="Email adders"
              />
              <InputFeild
                type="submit"
                value=" Get Started   "
                className="input-start-button"
              />
              <MdArrowForwardIos className="button-icon" />
            </div>
          </div>
        </div>
      </div>
      <div>fghjkl</div>
    </div>
  );
};

export default LandingPage;
