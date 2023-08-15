import React from "react";
import NavBar from "../../navbar/NavBar";
import Banner from "../../banner/Banner";
import Row from "../../row/Row";
import Requests from "../../../api/requests";

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
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
};

export default MoviesLayout;
