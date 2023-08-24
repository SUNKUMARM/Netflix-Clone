import React, { useEffect } from "react";
import { useState } from "react";
import server from "../../libs/axios";
import "./row.css";
import { v4 as uuid } from "uuid";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await server.get(fetchUrl);
      const { data, status } = response;
      if (status === 200 && data) {
        return setMovies(data.results);
      }
      return null;
    };
    fetchData();
  }, []);

  const id = uuid();
  const slideButtonLeft = () => {
    const slider = document.getElementById("slider" + id);
    slider.scrollLeft += (window.innerWidth / 100) * 95;
  };
  const slideButtonRight = () => {
    const slider = document.getElementById("slider" + id);
    slider.scrollLeft -= (window.innerWidth / 100) * 95;
  };

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        <div className="left-side-button" onClick={slideButtonLeft}>
          <AiOutlineLeft />
        </div>
        <div id={"slider" + id} className="row-posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row-single-poster ${isLargeRow && "row-posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt="img"
            />
          ))}
        </div>
        <div className="right-side-button" onClick={slideButtonRight}>
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default Row;
