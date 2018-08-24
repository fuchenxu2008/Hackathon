import React, { Component } from 'react';
import { Table } from 'antd';

import './index.css';

export default class DataTable extends Component {
  render() {
    return (
      <Table
        columns={this.props.columns}
        dataSource={this.props.data}
        bordered
        pagination={false}
        className='dark-table'
      /> 
    )
  }
}
