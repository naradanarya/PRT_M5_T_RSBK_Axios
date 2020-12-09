import React from "react";
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import Hp from "./pages/hp";
import { isMobile } from 'react-device-detect';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={isMobile ? Hp:Home} />
          <Route path='/about' component={About} />
          <Route path='/products' component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;