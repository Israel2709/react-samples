import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './About'
import Users from './Users'
import Home from './Home'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usersList: [
        "Eve",
        "Noemi",
        "Mauricio"
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Navbar</span>
        </nav>
        <Router>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-dark">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-9">
                <Switch>
                  <Route path="/about">
                    <About
                      users={this.state.usersList}
                    />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
