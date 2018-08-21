import React, { Component } from 'react';
import DataTable from '../DataTable';
import taskImg from '../../assets/taskimg.jpeg'
import { connect } from 'react-redux';
import './index.css';

export class TaskRunner extends Component {
  render() {
    const { taskData, runningMode, lastRun } = this.props
    return (
      <div className='taskrunner'>
        <div className='task-data'>
          <DataTable data={taskData.length > 0 ? [taskData[0]] : []} loading={runningMode ? true : false} />
          {
            lastRun && !runningMode && <img src={taskImg} className='task-img' alt=""/>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ task }) => ({
  runningMode: task.runningMode,
  taskData: task.taskData,
  lastRun: task.lastRun,
})

export default connect(mapStateToProps)(TaskRunner);
