import React from "react";
import Search from "./search";
import Item from "./item";
import { Row, Col } from 'antd';

const List = ({ word }) => {
  const movieList = Search(word);

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {movieList.map(movie => (<Col className="gutter-row" span={6}>
          <Item movie={movie} key={movie.id} /></Col>
        ))}
      </Row>
    </div>
  );
};

export default List;