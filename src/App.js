import React, { Component } from 'react';
import './App.css';
import './components/Counter.css';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
