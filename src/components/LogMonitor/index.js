import React, { Component } from 'react';
// import { Tabs } from 'antd';

import './index.css';

// const TabPane = Tabs.TabPane;

export default class LogMonitor extends Component {
    callback = (key) => {
        console.log(key);
    }

    render() {
        return (
            <div className="normal-panel">
                2018-04-22 10:30 Profit: 18.1734% (15.9673% over B&H)
                <br />2018-04-22 10:30 Stop detected.
                <br />2018-04-22 10:30 Profit: 18.1734% (15.9673% over B&H)
            </div> 
        )
  }
}
