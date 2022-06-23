import React from "react";
//Importing components
import MovieCard from "../components/reusables/MovieCard";
//importing context values
import { useMovieContext } from "../context/MoviesContext";
//styled
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
function Movies() {
  const { filteredMovies, buttons, loading } = useMovieContext();
  console.log(buttons);
  return (
    <AnimatePresence exitBeforeEnter>
      <MovieGrid layout>
        {!loading &&
          filteredMovies.map(({ id, original_title, backdrop_path }) => (
            <MovieCard
              key={id}
              id={id}
              title={original_title}
              imgpath={backdrop_path}
            />
          ))}
      </MovieGrid>
    </AnimatePresence>
  );
}
const MovieGrid = styled(motion.div)`
  display: grid;
  padding: 1rem 0.2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  h4 {
    font-size: 0.6rem;
    padding: 1rem 0rem;
  }
  .hide {
    overflow: hidden;
    border-radius: 1rem;
    height: 40vh;
  }
  img {
    width: 100%;
    border-radius: 1rem;
    height: 100%;
    object-fit: cover;
    /* transition: all 0.45s ease; */
    cursor: pointer;
    /* &:hover {
      transform: scale(1.05);
    } */
  }
`;
export default Movies;
