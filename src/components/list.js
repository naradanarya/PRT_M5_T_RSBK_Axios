import React from "react";
import Search from "./search";
import Item from "./item";

const List = ({ word }) => {
  const movieList = Search(word);

  return (
    <div>
      <ul> 
        {movieList.map(movie => (
          <Item movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default List;