import React from "react";
import Search from "./search";
import Item from "./item";
import "./list.css"


const List = ({ word }) => {
  const movieList = Search(word);

  return (
    <div className="b">
      <ul className=""> 
      <li className="a">
        {movieList.map(movie => (
          <Item movie={movie} key={movie.id} />
        ))}</li>
      </ul>
    </div>
  );
};

export default List;