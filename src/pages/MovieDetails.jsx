import React, { useState, useEffect, useCallback } from "react";
//axios and other packages
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { fadeAnime } from "../anime";
import { motion, AnimatePresence } from "framer-motion";
function MovieDetails() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const KEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${KEY}`;
  const imagepathPrefix = `https://image.tmdb.org/t/p/w500`;
  console.log(url);
  const fetchMovieData = useCallback(async () => {
    const movieData = await axios.get(url);

    setMovie(movieData);
  }, [movieID]);
  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);
  console.log(movie);

  return (
    <div>
      {movie && (
        <AnimatePresence exitBeforeEnter>
          <MovieDetailStyle
            variants={fadeAnime}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div className="movie-details-header">
              <h3>{movie.data.title}</h3>
              <h4>IMDB#{movie.data.imdb_id}</h4>
            </div>
            <div className="media">
              <img
                src={`${imagepathPrefix}${movie.data.poster_path}`}
                alt={`main-media-${movieID}`}
              />
            </div>
            <p>{movie.data.overview}</p>
            <img
              src={`${imagepathPrefix}${movie.data.backdrop_path}`}
              alt={`alternate-media-${movieID}`}
            />
          </MovieDetailStyle>
        </AnimatePresence>
      )}
    </div>
  );
}
const MovieDetailStyle = styled(motion.div)`
  padding: 1rem 1rem 0rem 1rem;
  .movie-details-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-weight: bold;
      font-size: 2rem;
      font-family: "Poppins";
      color: rgb(65, 98, 168);
    }
    h4 {
      font-weight: lighter;
      font-size: 1.4rem;
    }
  }
  .media {
    height: 90vh;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
  }
  img {
    height: 40vh;
    width: 100%;
    object-fit: cover;
  }
  p {
    padding: 1rem 0rem;
  }
`;
export default MovieDetails;
