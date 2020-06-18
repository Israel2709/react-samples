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
    this.trashClickHandler = this.trashClickHandler.bind(this)
  }

  trashClickHandler(event){
    console.log("trash")
    let userIndex = event.target.dataset.userKey
    let usersList = this.state.usersList
    usersList.splice(userIndex,1)
    this.setState({usersList})
  }

  render() {
    return (
      <div className="App">
        {
          this.state.usersList.map( (user, index) => {
            return <About 
                    name= {user}
                    trashClickHandler = {this.trashClickHandler}
                    userKey = {index}
                  />
          })
        }
        

      </div>
    );
  }
}

export default App;
