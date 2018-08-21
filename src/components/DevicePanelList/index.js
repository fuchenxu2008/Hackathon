import React, { Component } from 'react';
import DeviceWindow from '../DeviceWindow';
import './index.css';

export default class DevicePanelList extends Component {
  render() {
    return (
        <div>
            <div className='device-panel-list'>
                <DeviceWindow mode='A' active/>
                <DeviceWindow mode='B'/>
                <DeviceWindow mode='C'/>
            </div>
            <br /><br />
        </div>
        
    )
  }
}
