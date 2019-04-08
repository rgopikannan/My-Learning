import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MasterComp from "./components/MasterComp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MasterComp />
      </div>
    );
  }
}

export default App;
