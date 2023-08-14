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
import FrequentlyAskedQuestion from "../faq page/FrequentlyAskedQuestion";
import Footer from "../footer/Footer";
import LanguageOption from "../../navbar/landingPageNav/LanguageOption";

const LandingPage = () => {
  return (
    <div className="landing-page">
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
      <div className="faq-container">
        <h1 className="faq">Frequently Asked Questions</h1>
        <FrequentlyAskedQuestion
          question={"What is Netflix?"}
          answer={`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`}
        />
        <FrequentlyAskedQuestion
          question={"How much does Netflix cost?"}
          answer={
            "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 649 to ₹ 149 a month. No extra costs, no contracts."
          }
        />
        <FrequentlyAskedQuestion
          question={"Where can I watch?"}
          answer={`Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`}
        />
        <FrequentlyAskedQuestion
          question={"How do I cancel?"}
          answer={`Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`}
        />
        <FrequentlyAskedQuestion
          question={"What can I watch on Netflix?"}
          answer={`Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`}
        />
        <FrequentlyAskedQuestion
          question={"Is Netflix good for kids?"}
          answer={`The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`}
        />
        <p className="faq-title">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
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
      <div className="footer-container">
        <div className="footer-parent">
          <p className="footer">
            Questions? Call{" "}
            <span className="footer-content-text">000-800-919-1694</span>
          </p>
          <div className="footer-content footer">
            <Footer content="FAQ" />
            <Footer content="Help Centre" />
            <Footer content="Account" />
            <Footer content="Media Centre" />
            <Footer content="Investor Relations" />
            <Footer content="Jobs" />
            <Footer content="Ways to Watch" />
            <Footer content="Terms of Use" />
            <Footer content="Privacy" />
            <Footer content="Cookie Preferences" />
            <Footer content="Corporate Information" />
            <Footer content="Contact Us" />
            <Footer content="Speed Test" />
            <Footer content="Legal Notices" />
            <Footer content="Only on Netflix" />
          </div>
          <LanguageOption />
          <p className="footer">Netflix India</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
