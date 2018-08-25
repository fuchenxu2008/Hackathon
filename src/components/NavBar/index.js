import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../assets/mercurius-logo.png';

export default class NavBar extends Component {
  handleClick = () => {

  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        mode="horizontal"
        className='navbar'
      >
        <Menu.Item key="home">
          <Link to='/' /><img src={logo} style={{ height: '30px', transform: 'translateY(-8%)', marginRight: '10px' }} alt='' /> Hackathon
        </Menu.Item>
        <Menu.Item key="robots-lives">
          <Link to='/algorithms' /><Icon type="profile" />Robots Lives
        </Menu.Item>
        <Menu.Item key="currency-list">
          <Link to='/coins' /><Icon type="pay-circle-o" />Currency List
        </Menu.Item>
        <Menu.Item key="robots-detail">
          <Link to='/dashboard' /><Icon type="dot-chart" />Robots Detail
        </Menu.Item>
      </Menu>
    )
  }
}
