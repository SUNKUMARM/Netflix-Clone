import React, { useEffect } from "react";
import { useState } from "react";
import server from "../../libs/axios";
import "./row.css";

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

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
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
    </div>
  );
};

export default Row;
