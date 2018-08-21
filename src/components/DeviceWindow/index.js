import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { runMode } from '../../actions/task';
import './index.css';

export class DeviceWindow extends Component {
  startTask = (mode) => {
    let time = 0;
    if (mode === 'A') time = 3000;
    if (mode === 'B') time = 2000;
    if (mode === 'C') time = 1500;
    this.props.runMode(mode, time);
  }

  render() {
    const {mode, runningMode} = this.props;
    const running = mode === runningMode;
    return (
        <div className={`device-panel ${running && 'device-active'}`}>
          <div className='device-name'>
            Mode {mode}
          </div>
          <Button
            type='primary'
            ghost
            icon='caret-right'
            onClick={() => this.startTask(mode)}
            disabled={running}
          >Run</Button>
        </div>
    )
  }
}

const mapStateToProps = ({ task }) => ({
  runningMode: task.runningMode,
})

const mapDispatchToProps = (dispatch) => ({
  runMode: (mode, time) => dispatch(runMode(mode, time)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeviceWindow);
