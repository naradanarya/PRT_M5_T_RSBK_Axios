import React, { useState } from "react";
import List from "./components/list";

const App = () => {
  const [searchWord, setSearchWord] = useState("naruto");
  // const [currentValue, setCurrentValue] = useState(initialValue)
  // currentValue     : 使用する変数の名前
  // setCurrentValue  : 使用する関数の名前
  // useState         : Reactのメソッド
  // initialValue     : stateにいれる最初の値

  // 入力された値をstate保持させる関数
  const handleChange = e => {
    setSearchWord(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="SearchWord"
        //値が変わるたびにhandleChangeを動かす
        onChange={handleChange}
      />
      <List word={searchWord} />
    </div>
  );
};

export default App;