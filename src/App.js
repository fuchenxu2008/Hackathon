import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import DashBoard from './components/DashBoard';
import AlgorithmList from './components/AlgorithmList';
import CurrencyList from './components/CurrencyList';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path='/' component={NavBar} />
          <Route path='/dashboard' component={DashBoard} />
          <Route path='/algorithms' component={AlgorithmList} />
          <Route path='/coins' component={CurrencyList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
