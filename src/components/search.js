import { useState, useEffect } from "react";
import axios from "axios";

const Search = word => {
  const [movieList, setMovieList] = useState([]);
  const fetchMovie = async word => {
    const response = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=${word}`
    );
    const data = response.data.results;
    setMovieList(data);
  };

  useEffect(() => {
    fetchMovie(word);
  }, [word]);
  return movieList;
};

export default Search;
