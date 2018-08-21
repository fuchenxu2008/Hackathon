import React, { Component } from 'react';
import NavBar from './components/NavBar';
import DashBoard from './components/DashBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <DashBoard />
      </div>
    );
  }
}

export default App;
