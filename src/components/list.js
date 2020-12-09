import React from "react";
import Search from "./search";
import Item from "./item";
import { Row, Col } from 'antd';

const List = ({ word }) => {
  const movieList = Search(word);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {movieList.map(movie => (<Col span={6}>
          <Item movie={movie} key={movie.id} /></Col>
        ))}
      </Row>
    </div>
  );
};

export default List;