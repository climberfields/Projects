import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
// import HealthComponent from './HealthComponent';
import Login from './HealthComponent/Login'
import Coffee from './HealthComponent/Coffee'
import Selection from './HealthComponent/Selection'



class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/selection' component={Selection} />
        <Route path='/coffee' component={Coffee} />
      </Switch>
    );
  }
}

export default App;

// <Switch>
//   <Route exact path='/' component={Login} />
// </Switch>