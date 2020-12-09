import React from "react";
import { Card, WingBlank, WhiteSpace } from "antd-mobile";
const Itemhp = ({ movie }) => {
  return (
    <div>
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card style={{ textAlign: "center" }}>
          <Card.Header
            title={movie.title}
            extra={<span>({movie.type})</span>}
          />
          <Card.Body>
            <img src={movie.image_url} alt="" />
            <p style={{ textAlign: "justify" }}>{movie.synopsis}</p>
          </Card.Body>
          <Card.Footer
            content={<a href={movie.url}>Link</a>}
            extra={<p style={{ textAlign: "center" }}>Score: {movie.score}</p>}
          />
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    </div>
  );
};

export default Itemhp;
