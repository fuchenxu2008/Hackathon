import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import option from './option';

export default class EchartDisplay extends Component {
  render() {
    return (
      <ReactEcharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
    />
    )
  }
}
