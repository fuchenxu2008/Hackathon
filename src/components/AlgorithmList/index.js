import React, { Component } from 'react';
import { Button } from 'antd';
// import { Link } from 'react-router-dom';
import DataTable from '../DataTable';
import Echart from '../Echarts';
import { getOption } from '../Echarts/options';

import './index.css';

export default class AlgorithmList extends Component {
    goToAlgorithm = (algo) => {
        this.props.history.push(`/dashboard/${algo}`)
    }

    render() {
        const columns = [{
            title: 'Pie',
            dataIndex: 'pie',
        },{
            title: 'Algorithm',
            dataIndex: 'algorithm',
        }, {
            title: 'Profit',
            dataIndex: 'profit',
        }, {
            title: 'Created',
            dataIndex: 'created',
        }, {
            title: 'Action',
            dataIndex: 'action',
        }];

        const symbols = [
            "BTC",
            "ETH/BTC",
            "ETC/BTC",
            "LTC/BTC",
            "XRP/BTC",
            "XLM/BTC",
            "XEM/BTC"
        ]

        const pw = [
            0.14285714285714288,
            0.14285714285714288,
            0.14285714285714288,
            0.14285714285714288,
            0.14285714285714288,
            0.14285714285714288,
            0.14285714285714288
        ]

        const data = [{
            key: 1,
            pie: <Echart option={getOption('smallpie', {
                pw: pw.map(p => p + (1 - Math.random() * 2) * Math.random() * 0.1),
                symbols,
            })} height='50px' width='50px' />,
            algorithm: 'ucrp',
            profit: 32,
            created: '2018-06-30 15:06:04',
            // category: 'test',
            action: <Button ghost onClick={() => this.goToAlgorithm('ucrp')}>View</Button>
        }, {
            key: 2,
            pie: <Echart option={getOption('smallpie', {
                pw: pw.map(p => p + (1 - Math.random() * 2) * Math.random() * 0.1),
                symbols,
            })} height='50px' width='50px' />,
            algorithm: 'best',
            profit: 50,
            created: '2018-06-30 15:06:04',
            // category: 'test',
            action: <Button ghost onClick = {() => this.goToAlgorithm('best')}> View </Button>
        },  {
            key: 3,
            pie: <Echart option={getOption('smallpie', {
                pw: pw.map(p => p + (1 - Math.random() * 2) * Math.random() * 0.1),
                symbols,
            })} height='50px' width='50px' />,
            algorithm: 'ons',
            profit: 41,
            created: '2018-06-30 15:06:04',
            // category: 'test',
            action: <Button ghost onClick = {() => this.goToAlgorithm('ons')}> View </Button>
        },  {
            key: 4,
            pie: <Echart option={getOption('smallpie', {
                pw: pw.map(p => p + (1 - Math.random() * 2) * Math.random() * 0.1),
                symbols,
            })} height='50px' width='50px' />,
            algorithm: 'ubah',
            profit: 19,
            created: '2018-06-30 15:06:04',
            // category: 'test',
            action: <Button ghost onClick = {() => this.goToAlgorithm('ubah')}> View </Button>
        }];

        return (
            <div className='algorithm-list'>
                <DataTable icon='rocket' title='Algorithm List' columns={columns} data={data} />
            </div>
        )
    }
}
