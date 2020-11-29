import React from "react";
import "../test.css";

const Item = ({ movie }) => {
  return (
    <li>
      <h1>{movie.title}</h1>

      <div className="card">
        {movie.image_url ? (
          <img className="" src={movie.image_url} alt="" />
        ) : (
          <p>NoImage</p>
        )}

        <p>Score: {movie.score}</p>
        <a href={movie.url}>{movie.url}</a>
      </div>
    </li>
  );
};

export default Item;
