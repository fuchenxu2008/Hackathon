import React, { Component } from 'react'
// import { Icon } from 'antd';
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

        const { indicatorData } = this.props;
        const performanceData = indicatorData ? [{
            key: 1,
            average: indicatorData.average,
            portfolio_value: indicatorData.portfolio_value,
            max_drawdown: indicatorData.max_drawdown,
            sharpe_ratio: indicatorData.sharpe_ratio,
            sortino_ratio: indicatorData.sortino_ratio,
        }] : null;

        const updownData = indicatorData ? [{
            key: 1,
            negative_day: indicatorData.negative_day,
            negative_periods: indicatorData.negative_periods,
            negative_week: indicatorData.negative_week,
            postive_day: indicatorData.postive_day,
            postive_periods: indicatorData.postive_periods,
            postive_week: indicatorData.postive_week,
        }] : null;

        return (
            <div
                // className="normal-panel"
            >
                    {
                        // <h2 className='section-title'>
                        //     <Icon type="code" /> Monitor
                        // </h2>
                    }

                    <DataTable icon='dashboard' title='Performance' columns={performanceColumns} data={performanceData} fontSizeBase={0.9} paddingRatio={0.5} />

                    <br />

                    <DataTable icon='fork' title='Up/Down' columns={updownColumns} data={updownData} fontSizeBase={0.9} paddingRatio={0.5} />
                    
            </div> 
        )
    }
}
