import React, { Component } from 'react';
import SuperModeForm from './SuperModeForm';
import { connect } from 'react-redux';
import { runMode } from '../../actions/task';
import TaskRunner from '../TaskRunner';

export class SuperMode extends Component {
    runSuperMode = () => {
        this.props.runMode('SuperMode', 1000);
    }

    render() {
        return (
            <div>
            <SuperModeForm runSuperMode={this.runSuperMode} />
            { this.props.lastRun === 'SuperMode' && <TaskRunner /> }
            </div>
        )
    }
}

const mapStateToProps = ({ task }) => ({
  runningMode: task.runningMode,
  lastRun: task.lastRun,
})

const mapDispatchToProps = (dispatch) => ({
  runMode: (mode, time) => dispatch(runMode(mode, time)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SuperMode);
