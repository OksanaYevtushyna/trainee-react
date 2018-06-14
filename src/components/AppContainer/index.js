import React, { Component } from 'react';
import './App.css';
import Button from "../ui/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Button>Test</Button>
          <Button>Get started</Button>
          <Button>Sign Up</Button>
      </div>
    );
  }
}

export default App;
