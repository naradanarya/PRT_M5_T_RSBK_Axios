import React from "react";
import Search from "./search";
import Item from "./item";

const List = ({ word }) => {
  const movieList = Search(word);

  return (
    <div>
      <ul>
         // movieListに配列が返ってきているのでmap処理 
        {movieList.map(movie => (
          <Item movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default List;