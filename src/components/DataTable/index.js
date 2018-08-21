import React, { Component } from 'react';
import { Table } from 'antd';

const { Column } = Table;

export default class DataTable extends Component {
  render() {
    return (
      <Table
        dataSource={this.props.data}
        bordered
        pagination={false}
        loading={this.props.loading}
      > 
        <Column
          title="Mode"
          dataIndex="mode"
          key="mode"
          width='10%'
        />
        <Column
          title="Analysis"
          dataIndex="analysis"
          key="analysis"
        />
        <Column
          title="Average Frame Rate"
          dataIndex="averageFrameRate"
          key="averageFrameRate"
        />
        <Column
          title="Average Latency"
          dataIndex="averageLatency"
          key="averageLatency"
        />
        <Column
          title="Average Power Consumption"
          dataIndex="averagePowerConsumption"
          key="averagePowerConsumption"
        />
        <Column
          title="Peak Bandwidth"
          dataIndex="peakBandwidth"
          key="peakBandwidth"
        />
      </Table>
    )
  }
}
