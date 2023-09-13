import React, { useEffect } from "react";
import { useState } from "react";
import server from "../../libs/axios";
import "./row.css";
import { v4 as uuid } from "uuid";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Movies from "../pages/movies/Movies";

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
        <div>
          <Movies movies={movies} isLargeRow={isLargeRow} id={id} />
        </div>

        <div className="right-side-button" onClick={slideButtonRight}>
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default Row;
