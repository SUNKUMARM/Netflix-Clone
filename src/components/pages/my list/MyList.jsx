import React, { useEffect, useState } from "react";
import "./myList.css";
import { useAuthContext } from "../../../context/AuthContext";
import { onSnapshot, updateDoc, doc } from "firebase/firestore";
import { AiFillHeart } from "react-icons/ai";
import { db } from "../../../firebase";
import NavBar from "../../navbar/NavBar";

// const base_url = "https://image.tmdb.org/t/p/w500";
const base_url = "https://image.tmdb.org/t/p/original/";

const MyList = ({ isLargeRow }) => {
  const { user } = useAuthContext();
  const [movies, setMovies] = useState([]);

  const docRef = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) =>
      setMovies(doc.data()?.FavMovies)
    );
  }, [user?.email]);

  const removeFavMovie = async (movie) => {
    try {
      const result = movies.filter((item) => item.id !== movie.id);
      await updateDoc(docRef, { favMovies: result });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="myList-container">
      <div className="myList-nav">
        <NavBar />
      </div>
      <div className="row">
        <h2 className="my-row-title">My List</h2>
        <div className="row-container">
          <div id={"slider"}>
            {movies?.map((movie) => (
              <div key={movie.id}>
                <img
                  src={`${base_url}${movie.backdrop_path}`}
                  alt={movie.name || movie.title}
                />
                <div className="like-icon-parent">
                  <p className="movie-name">{movie.name || movie.title}</p>
                  <p>
                    <AiFillHeart
                      className="movie-outline-heart"
                      onClick={() => removeFavMovie(movie)}
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
