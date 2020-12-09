import React from "react";
import { Card, Image } from "antd";

const Item = ({ movie }) => {
  return (
    <Card
      hoverable
      title={movie.title}
      style={{textAlign:"center"}}
      bordered={false}
    >
      {movie.image_url ? (
        <Image width={300}  src={movie.image_url} alt="" />
      ) : (
        <p>NoImage</p>
      )}
      <div>
        <h1>Score : {movie.score}</h1>
        <p style={{textAlign:"justify"}}>{movie.synopsis}</p>
        <a href={movie.url}>Link</a>
      </div>
    </Card>
  );
};

export default Item;
