import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Containers/Home/'
import Product from './Containers/Product/'

class App extends Component {
  state = {
    hidden: false,
    selectedTab: 'blueTab'
  }
  render() {
    return (
      <Router>
        <Route path="/">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product/:pid" component={Product} />
          </Switch>
        </Route>
      </Router>
    );
  }
}

export default App;
