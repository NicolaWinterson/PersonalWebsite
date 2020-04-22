import React from 'react';
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cv">
          <Resume />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
