import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAuthContext } from "../../../context/AuthContext";
import { arrayUnion, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

// const base_url = "https://image.tmdb.org/t/p/w500";
const base_url = "https://image.tmdb.org/t/p/original/";

const Movies = ({ isLargeRow, movie }) => {
  const { user } = useAuthContext();
  const [like, setLike] = useState(false);
  const [fav, setFav] = useState([]);
  const docRef = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setFav(doc.data()?.favMovies);
    });
  }, [setFav]);

  const addFavMovie = async (movie) => {
    if (user?.email) {
      setLike(!like);
      await updateDoc(docRef, {
        FavMovies: arrayUnion({
          id: movie.id,
          title: movie?.title || movie?.name,
          img: movie?.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  const removeFavMovie = async (movie) => {
    setLike(!like);
    try {
      const result = fav.filter((item) => item.id !== movie.id);
      await updateDoc(docRef, { favMovies: result });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="img-shown">
      <img
        className={`row-single-poster ${isLargeRow && "row-posterLarge"}`}
        src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt="img"
      />
      <div className="like-icon-parent">
        <p className="like-heart" onClick={addFavMovie}>
          {fav?.some((favMovie) => favMovie.id === movie.id) ? (
            <AiFillHeart
              className="movie-outline-heart"
              onClick={() => removeFavMovie(movie)}
            />
          ) : (
            <AiOutlineHeart
              className="movie-fill-heart"
              onClick={() => addFavMovie(movie)}
            />
          )}
        </p>
        <p className="movie-name">{movie.name || movie.title}</p>
      </div>
    </div>
  );
};

export default Movies;
