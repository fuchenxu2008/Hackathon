import React, { Component } from 'react';
import { Button, Modal } from 'antd';
// import { Link } from 'react-router-dom';
import DataTable from '../DataTable';
import Echart from '../Echarts';
import { getOption } from '../Echarts/options';

import './index.css';

export default class AlgorithmList extends Component {
    state = { visible: false, modalTitle: '' }

    showModal = (title) => {
        this.setState({
            visible: true,
            modalTitle: title,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
            modalTitle: ''
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
            modalTitle: ''
        });
    }

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

        const getData = () => ['ucrp', 'best', 'ons', 'ubah'].map((algo, i) => ({
            key: i,
            pie: <Echart option={getOption('smallpie', {
                pw: pw.map(p => p + (1 - Math.random() * 2) * Math.random() * 0.1),
                symbols,
            })} height='50px' width='50px' />,
            algorithm: algo,
            profit: Math.random() * 60,
            created: '2018-06-30 15:06:04',
            action: (
                <div>
                    <Button type='default' ghost onClick={() => this.goToAlgorithm(algo)}>View</Button>&nbsp;&nbsp;
                    <Button type='primary' ghost onClick={() => this.showModal('Transfer')}>Transfer</Button>&nbsp;&nbsp;
                    <Button type='danger' ghost onClick={() => this.showModal('Withdraw')}>Withdraw</Button>
                </div>
            )
        }))

        return (
            <div className='algorithm-list'>
                <DataTable icon='rocket' title='Algorithm List' columns={columns} data={getData()} />
                <Modal
                    title={this.state.modalTitle}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}
