import React, { useState } from "react";
import List from "../components/list";
import "../style/test.css";

const Home = () => {
  const [searchWord, setSearchWord] = useState("naruto");
  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <div>
      <div className="main">
        <input type="text" placeholder="SearchWord" onChange={handleChange} />
        <List word={searchWord} />
      </div>
    </div>
  );
};

export default Home;
