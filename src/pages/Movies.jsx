import React from "react";
//Importing components
import MovieCard from "../components/reusables/MovieCard";
//importing context values
import { useMovieContext } from "../context/MoviesContext";
function Movies() {
  const { filteredMovies, loading } = useMovieContext();
  console.log(filteredMovies);
  return (
    <div>
      {!loading &&
        filteredMovies.map(({ id, original_title, backdrop_path }) => (
          <MovieCard
            key={id}
            id={id}
            title={original_title}
            imgpath={backdrop_path}
          />
        ))}
    </div>
  );
}

export default Movies;
