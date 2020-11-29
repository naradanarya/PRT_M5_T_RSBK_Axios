import React from "react";

const Item = ({ movie }) => {
  return (
    <li>
      <p>{movie.title}</p>
      <div>
        // 画像無い場合はNoImageと表示（画像用意するの面倒だった）
        {movie.image_url ? (
          <img
            className=""
            src={movie.image_url}
            alt=""
          />
        ) : (
          <p>NoImage</p>
        )}
        <p>{movie.overview}</p>
      </div>
    </li>
  );
};

export default Item;
