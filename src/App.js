import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import DashBoard from './components/DashBoard';
import AlgorithmList from './components/AlgorithmList';
import CurrencyList from './components/CurrencyList';
import Brand from './components/Brand';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <NavBar />
          <Switch>
            <Route path='/dashboard/:algo' component={DashBoard} />
            <Route path='/dashboard' component={DashBoard} />
            <Route path='/algorithms' component={AlgorithmList} />
            <Route path='/coins' component={CurrencyList} />
            <Route path='/' component={Brand} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
