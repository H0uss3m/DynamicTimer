import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
class App extends Component {
  render() {
    return (
     <div className="Timer">
        <Timer ms={1455555555} />
     </div>
    );
  }
}

export default App;
