import React from "react";
import { motion } from "framer-motion";
import { fadeAnime } from "../../anime";
import { useNavigate } from "react-router-dom";
function MovieCard({ title, imgpath, id }) {
  const imagepathPrefix = `https://image.tmdb.org/t/p/w500`;
  const navigate = useNavigate();
  return (
    <motion.div
      layout
      variants={fadeAnime}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.h4 layout>{title}</motion.h4>
      <div className="hide">
        {" "}
        <motion.img
          onClick={() => navigate(`/movies/${id}`)}
          whileHover={{
            scale: 1.1,
          }}
          layout
          src={`${imagepathPrefix}${imgpath}`}
          alt={id}
        />
      </div>
    </motion.div>
  );
}

export default MovieCard;
