import React, { Component } from 'react';
import { connect } from 'react-redux';
import Echarts from '../Echarts';
import { getOption } from '../Echarts/options'; // temp

import './index.css';


export class ChartDisplay extends Component {
  render() {
    return (
       <div className="card-container">
            <div className='panel'>
              <h2>CandleStick</h2>
              <Echarts option={this.props.candleOption} height='450px' />
            </div>
            {
              // <TabPane tab="Profit Chart" key="2">
              //   <Echarts  height='450px' />
              // </TabPane>
              // <TabPane tab="Pie" key="3">
              //   <Echarts option={getOption('pie')} height='450px' />
              // </TabPane>
            }
        </div> 
    )
  }
}

const mapStateToProps = ({ data }) => ({
  candleData: data.candleData,
  candleOption: data.candleOption
});

export default connect(mapStateToProps)(ChartDisplay);