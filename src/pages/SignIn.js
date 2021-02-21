import React, { useContext } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "../auth/Auth";
import "./SignIn.css";

const SignIn = ({ history }) => {
  const { signin } = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signin(email.value, password.value, history);
  };

  return (
    <div class="login">
       <div class="login-triangle"></div>
       <h2 class="login-header">Log in</h2>
      <form class="login-container" onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default withRouter(SignIn);