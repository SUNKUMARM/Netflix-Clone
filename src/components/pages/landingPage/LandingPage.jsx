import React from "react";
import banner from "../../assets/banner.jpg";
import "./landingpage.css";
import LandingPageNav from "../../navbar/landingPageNav/LandingPageNav";
import InputFeild from "../../inputFeild/InputFeild";
import { MdArrowForwardIos } from "react-icons/md";
import MultiSlideLandingPage from "../../multiSlidePage/MultiSlideLandingPage";
import tv from "../../../components/assets/tv.png";
import mobile from "../../../components/assets/strangeThings.jpg";
import desktop from "../../../components/assets/tvImg2.png";
import children from "../../../components/assets/children.png";
import tvVideo1 from "../../../components/assets/tvVideo1.m4v";
import tvVideo2 from "../../../components/assets/tvVideo2.m4v";
import MultiSlideDirection from "../../multiSlidePage/multiSlideDirection/MultiSlideDirection";

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
      <div className="multi-slide-parent-container">
        <div className="Single-Slide">
          <MultiSlideLandingPage
            className="title-content"
            title="Enjoy on your TV"
            paragraph="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
            image={tv}
            video={tvVideo1}
            tvVideo="video-one"
          />
        </div>
        <div className="Single-Slide direction">
          <MultiSlideDirection
            image={mobile}
            className="title-content"
            title="Download your shows to watch offline"
            paragraph="Save your favourites easily and always have something to watch."
          />
        </div>
        <div className="Single-Slide">
          <MultiSlideLandingPage
            title="Watch everywhere"
            paragraph="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
            className="title-content"
            image={desktop}
            video={tvVideo2}
            tvVideo="video-two"
          />
        </div>
        <div className="Single-Slide direction">
          <MultiSlideDirection
            image={children}
            paragraph="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
            title="Create profiles for kids"
            className="title-content"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
