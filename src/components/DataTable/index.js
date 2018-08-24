import React, { Component } from 'react';

import './index.css';

export default class DataTable extends Component {
  render() {
    const { columns, data, title, fontSizeBase, paddingRatio } = this.props;

    return (
      <div className='dark-datatable'>
        {title && <div className='dark-table-heading'>{title}</div> }
        <table className='dark-table'>
          <thead>
            <tr>
              {
                columns && columns.map(col => (
                  <th
                    key={col.dataIndex}
                    className='dark-table-th'
                    style={{
                      fontSize: `${fontSizeBase}rem`,
                      padding: `${paddingRatio * 0.8}rem ${paddingRatio * 2}rem ${paddingRatio * 0.8}rem ${paddingRatio * 2}rem`
                    }}
                  >{col.title}</th>
                ))
              }  
            </tr>
          </thead>
          <tbody>
              {
                data && data.map((row, i) => ( //几行
                  <tr key={row.key} className={i % 2 !== 0 ? 'dark-table-stripe-row' : ''}>
                    {
                      columns && columns.map((col, j) => ( //几列
                        <td
                          key={col.dataIndex}
                          className='dark-table-td'
                          style={{
                            fontSize: `${fontSizeBase - 0.1}rem`,
                            padding: `${paddingRatio * 1}rem ${paddingRatio * 2}rem ${paddingRatio * 1}rem ${paddingRatio * 2}rem`
                          }}
                        >{row[Object.keys(row)[j + 1]]}</td>
                      ))
                    }
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    )
  }
}
