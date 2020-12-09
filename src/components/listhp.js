import React from "react";
import Search from "./search";
import Itemhp from "./itemhp";


const Listhp = ({ word }) => {
  const movieList = Search(word);
  return (
    <div>
        {movieList.map(movie => (
          <Itemhp movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default Listhp;

