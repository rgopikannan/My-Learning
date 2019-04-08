import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      age: 20
    };
  }

  onAgeUpdate = (val)=>{
    this.setState({...this.state.age,
      age: (this.state.age + val)
    });
  }
  render() {
    return (
      <div className="App">
        <h1>React-Redux</h1>

        <div className="container">
          <h3>{this.state.age}</h3>
          <div className="controlWrapper">
            <div>
              <button onClick={(e)=>{this.onAgeUpdate(1)}}>Age UP</button>
            </div>
            <div>
              <button onClick={(e) =>{this.onAgeUpdate(-1)}}>Age Down</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
