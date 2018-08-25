import React, { Component } from 'react';
import { Spin, Icon } from 'antd';
import { connect } from 'react-redux';
import Echarts from '../Echarts';
import StatisticsMonitor from '../StatisticsMonitor';
// import { getOption } from '../Echarts/options'; // temp

import './index.css';


export class ChartDisplay extends Component {
  render() {
    const { status, candleOption, pieOption, indicatorData, algo } = this.props;

    return (
       <Spin className="card-container" spinning={status === 'fetching'}>
            <div className='panel'>
              <h2>{<Icon type="pay-circle-o" />}&nbsp;&nbsp;&nbsp;{status}{algo && ` - ${algo}`}</h2>
              <Echarts option={candleOption} height='450px' />
            </div>

            <div className='monitor-view'>
              <StatisticsMonitor indicatorData={indicatorData} />
              <div className='panel pie-panel'>
                <Echarts option={pieOption} height='300px' />
              </div>
            </div>
            
        </Spin> 
    )
  }
}

const mapStateToProps = ({ data }) => ({
  status: data.status,
  candleData: data.candleData,
  candleOption: data.candleOption,
  pieOption: data.pieOption,
  indicatorData: data.indicatorData,
});

export default connect(mapStateToProps)(ChartDisplay);