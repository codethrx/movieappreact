import React from "react";

function MovieCard({ title, imgpath, id }) {
  const imagepathPrefix = `https://image.tmdb.org/t/p/w500`;
  return (
    <div>
      <h4>{title}</h4>
      <img src={`${imagepathPrefix}${imgpath}`} alt={id} />
    </div>
  );
}

export default MovieCard;
