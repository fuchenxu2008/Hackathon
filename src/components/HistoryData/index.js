import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTable from '../DataTable';
import './index.css';

class HistoryData extends Component {
  render() {
    const { taskData } = this.props;
    console.log('taskData: ', taskData);
    return (
      <div>
        {
          taskData.length > 0
          ? <DataTable data={taskData} />
          : <div className='no-history-hint'>No history data available</div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ task }) => ({
  taskData: task.taskData,
})

export default connect(mapStateToProps)(HistoryData);
