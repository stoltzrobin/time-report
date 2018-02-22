import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';

import timeOverviewContainer from './containers/timeOverviewContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ timeOverviewContainer } />
      </Switch>
    );
  }
}

export default App;
