import React, { Component } from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import Echarts from '../Echarts';
import { getOption } from '../Echarts/options'; // temp

import './index.css';


export class ChartDisplay extends Component {
  render() {
    const { status, candleOption } = this.props;

    return (
       <Spin className="card-container" spinning={status === 'fetching'}>
            <div className='panel'>
              <h2>{status}</h2>
              <Echarts option={candleOption} height='450px' />
            </div>
            {
              //   <Echarts option={getOption('pie')} height='450px' />
            }
        </Spin> 
    )
  }
}

const mapStateToProps = ({ data }) => ({
  status: data.status,
  candleData: data.candleData,
  candleOption: data.candleOption
});

export default connect(mapStateToProps)(ChartDisplay);