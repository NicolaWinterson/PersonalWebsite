import React from 'react';
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Home from "./components/Home"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
{/*       <Route path="/:cv" component={Resume} />
      <Route exact path="/:portfolio" component={Portfolio} />
      <Route path="/" component={Home} /> */}
    </Router>
  );
}

/* export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cv">C.V.</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
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
      </div>
    </Router>
  );
} */

/* function Home() {
  return <h2>Hej and welcome!</h2>;
} */

/* function Resume() {
  return <h2>This will soon be a functional component</h2>;
} */

/* function Portfolio() {
  return <h2>This will soon be a functional component</h2>;
} */
