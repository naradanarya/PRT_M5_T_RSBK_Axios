import React, { useState } from "react";
import List from "../components/list";
import "../style/test.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Home = () => {
  const [searchWord, setSearchWord] = useState("naruto");
  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <div>
      <div className="main">
        <Input
          prefix={<SearchOutlined />}
          size="large"
          placeholder="SearchWord"
          onChange={handleChange}
        />
        <List word={searchWord} />
      </div>
    </div>
  );
};

export default Home;
