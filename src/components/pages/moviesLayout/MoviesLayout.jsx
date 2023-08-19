import React from "react";
import NavBar from "../../navbar/NavBar";
import Banner from "../../banner/Banner";
import Row from "../../row/Row";
import Requests from "../../../api/requests";
import Footer from "../../../components/pages/footer/Footer";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import "./moviesLayout.css";

const MoviesLayout = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="AdventureMovies" fetchUrl={Requests.fetchAdventureMovies} />
      <Row title="WarMovies" fetchUrl={Requests.fetchWarMovies} />
      <Row
        title="ScienceFictionMovies"
        fetchUrl={Requests.fetchScienceFictionMovies}
      />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
      <Row title="Crime" fetchUrl={Requests.fetchCrime} />
      <Row title="Fantasy" fetchUrl={Requests.fetchFantasy} />
      <Row title="History" fetchUrl={Requests.fetchHistory} />
      <div className="movie-footer-container">
        <div className="movie-footer-icons">
          <FaFacebookF />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiFillYoutube />
        </div>
        <div className="movie-footer-contents">
          <Footer content="Audio Description" />
          <Footer content="Help Centre" />
          <Footer content="Gift Cards" />
          <Footer content="Media Centre" />
          <Footer content="Investor Relations" />
          <Footer content="Jobs" />
          <Footer content="Terms of Use" />
          <Footer content="Privacy" />
          <Footer content="Legal Notices" />
          <Footer content="Cookie Preferences" />
          <Footer content="Corporate Information" />
          <Footer content="Contact Us" />
        </div>
        <p className="movie-footer-code">Service Code</p>
        <p className="movie-footer-copyright">@ 1997-2023 Netflix. Inc</p>
      </div>
    </div>
  );
};

export default MoviesLayout;
