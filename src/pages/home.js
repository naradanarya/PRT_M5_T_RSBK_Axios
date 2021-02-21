import React, { useState, useContext } from "react";
import List from "../components/list";
import Navbar from "../components/navbar";
import "../style/test.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { AuthContext } from "../auth/Auth";

const Home = () => {
  const [searchWord, setSearchWord] = useState("naruto");
  const { signout } = useContext(AuthContext);
  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <div>
      <Navbar/>
      <button onClick={signout}>Sign out</button>
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
