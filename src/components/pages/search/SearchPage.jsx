import { useDebounce } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";
import server from "../../../libs/axios";
import NavBar from "../../../components/navbar/NavBar";
import "./searchPage.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [title, setTitle] = useState("");
  const debouncedSearchTerm = useDebounce(search, 500);

  const API_KEY = "0e5e053e766730813e35433bbd09cd1d";

  const searchMovie = async (query) => {
    try {
      const response = await server.get(
        `search/movie?api_key=${API_KEY}&query=${query}`
      );
      return response.data.results;
    } catch (error) {
      console.error("Error searching for movies", error);
      return [];
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    const results = await searchMovie(search);
    setMovies(results);
    setIsSearching(false);
  };

  useEffect(() => {
    const onchangeSearch = async () => {
      setIsSearching(true);
      const results = await searchMovie(debouncedSearchTerm);
      setMovies(results);
      setTitle(`Result for ${debouncedSearchTerm}`);
      setIsSearching(false);
    };
    const trendingMovies = async () => {
      const response = await server.get(
        `/trending/all/week?api_key=${API_KEY}&language=en-US`
      );
      setMovies(response.data.results);
      setTitle("Trending Movies");
    };
    if (debouncedSearchTerm === "") {
      trendingMovies();
    } else {
      onchangeSearch();
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="search-container">
      <div className="myList-nav">
        <NavBar />
      </div>
      <form onSubmit={handleSearch} className="form-parent">
        <input
          type="search"
          className="search-input"
          placeholder="Search movies"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="search-button">
          {isSearching ? "..." : "search"}
        </button>
      </form>
      <div className="">
        <h2 className="search-title">{title}</h2>
        <div className="search-image-parent">
          {movies.map((movie) => (
            <img
              className="search-image"
              key={movie.id}
              src={`${base_url}${movie.poster_path || movie.backdrop_path}`}
              alt={movie.name || movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
