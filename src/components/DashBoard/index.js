import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import QueryForm from '../QueryForm';
import ChartDisplay from '../ChartDisplay';
import StatisticsMonitor from '../StatisticsMonitor';
import LogMonitor from '../LogMonitor';
import { getChartData } from '../../actions/data';
import './index.css';

export class DashBoard extends Component {
  componentDidMount() {
    console.log('mount');
  }

  handleAdvancedQuery = (query) => {
    this.props.getChartData(query);
  }

  render() {
    return (
      <div className='dashboard'>
        <h2 className='section-title'>
          {
            // <Icon type="area-chart" /> Echarts
          }
        </h2>
        <QueryForm onQuery={this.handleAdvancedQuery} />
        <br />
        <ChartDisplay />
        
        <br /><br />
        
        <h2 className='section-title'>
          <Icon type="code" /> Monitor
        </h2>
        <div className='monitor-view'>
          <StatisticsMonitor />
          <LogMonitor />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getChartData: (query) => dispatch(getChartData(query))
})

export default connect(null, mapDispatchToProps)(DashBoard);