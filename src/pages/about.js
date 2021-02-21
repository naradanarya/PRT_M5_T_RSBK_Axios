import React, { useContext } from "react";
import "antd/dist/antd.css";
import "../style/test.css";
import { AuthContext } from "../auth/Auth";

const About = () => {
  const { signout } = useContext(AuthContext);
  return (
    <div className="products">
      <h1>About</h1>
      <button onClick={signout}>Sign out</button>
    </div>
  );
};

export default About;
