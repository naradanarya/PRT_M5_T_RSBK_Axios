import React from "react";
import "../style/test.css";
import "./item.css";

const Item = ({ movie }) => {
  return (
    <li className="c">
      <div className="card">
        <h1>{movie.title} ({movie.type})</h1>
        {movie.image_url ? (
          <img className="" src={movie.image_url} alt="" />
        ) : (
          <p>NoImage</p>
        )}
        <div>
        <p className="r">{movie.synopsis}</p>
        </div>
        <p>Score: {movie.score}</p>
        <a href={movie.url}>Link</a>
      </div>
    </li>
  );
};

export default Item;
