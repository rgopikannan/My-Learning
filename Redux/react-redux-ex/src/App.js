import React, { Component } from 'react';

import './App.css';
import AddTodo from './components/AddTodo';
import ViewTodoList from './components/ViewTodoList';
import FilterTodoList from './components/FilterTodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React-Redux</h1>
        <div className="container">
          <AddTodo />
          <ViewTodoList />
          <FilterTodoList />
        </div>
      </div>
    );
  }
}

export default App;
