import React, { Component } from 'react';
import { Menu, Icon, Modal } from 'antd';
import HistoryData from '../HistoryData';
import SuperMode from '../SuperMode';
import logo from '../../assets/logo.jpeg';
import './index.css';

export default class NavBar extends Component {
  state = {
    visible: false,
    modalTitle: '',
  }

  handleClick = (e) => {
    if (e.key === 'history') {
      this.setState({ visible: true, modalTitle: 'History Data' });
    } else if (e.key === 'supermode') {
      this.setState({ visible: true, modalTitle: 'Super Mode' });
    }
  }

  handleOk = (e) => {
    this.setState({ visible: false });
  }

  handleCancel = (e) => {
    this.setState({ visible: false });
  }

  render() {
    const { modalTitle, visible } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        mode="horizontal"
        className='navbar'
      >
        <Menu.Item key="dashboard">
          <img src={logo} className='logo' alt=''/> GEW ToolBox
        </Menu.Item>
        <Menu.Item key="history">
          <Icon type="area-chart" />History
        </Menu.Item>
        <Menu.Item key="supermode">
          <Icon type="api" />SuperMode
        </Menu.Item>

        <Modal
          title={modalTitle}
          width='80%'
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          { modalTitle === 'Super Mode' && <SuperMode /> }
          { modalTitle === 'History Data' && <HistoryData /> }
        </Modal>
      </Menu>
    )
  }
}
