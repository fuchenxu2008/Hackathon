import React, { Component } from 'react';
import './index.css';
import logo from '../../assets/mercurius-logo.png';

export default class Brand extends Component {
  render() {
    return (
      <div className='brand'>
        <img src={logo} alt=""/>
      </div>
    )
  }
}
