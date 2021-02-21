import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./pages/about";
import Hp from "./pages/hp";
import PrivateRoute from "./pages/PrivateRouter";
import { AuthProvider } from "./auth/Auth";
import Home from "./pages/home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { isMobile } from 'react-device-detect';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={isMobile ? Hp:Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    </AuthProvider>
  );
};