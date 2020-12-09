import React, { useState } from "react";
import Listhp from "../components/listhp";

const Hp = () => {
  const [searchWord, setSearchWord] = useState("naruto");
  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="SearchWord" onChange={handleChange} />
      <div>
        <Listhp word={searchWord} />
      </div>
    </div>
  );
};

export default Hp;
