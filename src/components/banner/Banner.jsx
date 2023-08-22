import React, { useEffect, useState } from "react";
import server from "../../libs/axios";
import Requests from "../../api/requests";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await server.get(Requests.fetchNetflixOriginals);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * (response.data.results.length - 1))
          ]
        );
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
    const key = setInterval(() => fetchData(), 10000);
    return () => {
      clearInterval(key);
    };
  }, []);

  const handleDescription = (data, n) => {
    return data?.length > n ? data.substring(0, n) + "..." : data;
  };
  return (
    <header
      className="banner"
      style={{
        background: "rgba(255, 0, 0, 0.1)",
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-tittle">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">Watch Later</button>
        </div>
        <h1 className="banner-description">
          {handleDescription(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
};

export default Banner;
