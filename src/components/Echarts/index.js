import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
// import moment from 'moment';
// import { calculateMA } from '../Echarts/options/CandleStick';
// import { getOption } from './options';

import './index.css';

export default class Echarts extends Component {
  chart = null;

  handleResizeChart = () => {
    this.chart.resize()
  }

  onChartReady = (chart) => {
    this.chart = chart
    window.addEventListener('resize', this.handleResizeChart);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeChart);
  }

  render() {
    const { option, height, width } = this.props;
    if (!option) return null;

    return (
      <ReactEcharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        onChartReady={this.onChartReady}
        className='react-echart'
        style={{ height, width }}
      />
    )
  }
}
