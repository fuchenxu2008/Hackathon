import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import DataTable from '../DataTable';
import Echart from '../Echarts';
import { getOption } from '../Echarts/options';

import './index.css';

export default class AlgorithmList extends Component {
    onHandle = () => {
        console.log(5);
        this.props.history.push('/dashboard')
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
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.profit - b.profit,
        }, {
            title: 'Created',
            dataIndex: 'created',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.created - b.created,
        }, {
            title: 'Category',
            dataIndex: 'category',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.category - b.category,
        }, {
            title: 'Action',
            dataIndex: 'action',
        }];

        const data = [{
            key: '1',
            pie: <Echart option={getOption('pie')} height='50px' />,
            algorithm: 'John Brown',
            profit: 32,
            created: '2018-06-30 15:06:04',
            category: 'test',
            action: <Button onClick={this.onHandle}>View</Button>
            // <Link to='/dashboard'>View</Link>
        }];

        return (
            <div className='algorithm-list'>
                <DataTable columns={columns} data={data} />
            </div>
        )
    }
}
