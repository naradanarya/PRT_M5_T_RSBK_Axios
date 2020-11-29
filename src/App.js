import React, { useState } from "react";
import List from "./components/list";

const App = () => {
  const [searchWord, setSearchWord] = useState("naruto");
  const handleChange = e => {
    setSearchWord(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="SearchWord"
        onChange={handleChange}
      />
      <List word={searchWord} />
    </div>
  );
};

export default App;