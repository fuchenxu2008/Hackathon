import React, { Component } from 'react'
// import { Tabs } from 'antd';
import DataTable from '../DataTable';

// const TabPane = Tabs.TabPane;
import './index.css';

export default class StatisticsMonitor extends Component {
    render() {
        const performanceColumns = [{
            title: 'Average',
            dataIndex: 'averge',
        }, {
            title: 'Portfolio Value',
            dataIndex: 'portfolio_value',
        }, {
            title: 'Max Drawdown',
            dataIndex: 'max_drawdown',
        }, {
            title: 'Sharpe Ratio',
            dataIndex: 'sharpe_ratio',
        }, {
            title: 'Sortino Ratio',
            dataIndex: 'sortino_ratio',
        }];

        const updownColumns = [{
            title: 'Negative Day',
            dataIndex: 'negative_day',
        }, {
            title: 'Negative Periods',
            dataIndex: 'negative_periods',
        }, {
            title: 'Negative Week',
            dataIndex: 'negative_week',
        }, {
            title: 'Postive Day',
            dataIndex: 'postive_day',
        }, {
            title: 'Postive Periods',
            dataIndex: 'postive_periods',
        }, {
            title: 'Postive Week',
            dataIndex: 'postive_week',
        }];

        return (
            <div className="normal-panel">
                {
                    // <DataTable columns={performanceColumns} />
                    // <DataTable  columns={updownColumns} />
                }
            </div> 
        )
    }
}
