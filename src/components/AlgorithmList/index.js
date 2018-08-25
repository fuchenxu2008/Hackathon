import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import moment from 'moment';
import Web3 from 'web3';
// var Web3 = require('web3') // The web3.js library
import DataTable from '../DataTable';
import Echart from '../Echarts';
import { getOption } from '../Echarts/options';

import './index.css';

const web3Provider = window.web3 ? window.web3.currentProvider : null;
const myWeb3 = new Web3(web3Provider);
console.log('myWeb3: ', myWeb3);

function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
}

export default class AlgorithmList extends Component {
    state = { visible: false, modalTitle: '', body: '' }

    showModal = (title) => {

        this.interact();
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

    interact = () => {
        let that = this;
        myWeb3.eth.getAccounts(function (err, accounts) {
            console.log(accounts);
            myWeb3.eth.getBalance(accounts[0], function (err, balance) {
                console.log(balance);
                that.setState({ body: <h3>Your balance is <b>{balance.toString()}</b></h3> })
            })
        })
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

        const getData = () => ['ucrp', 'best', 'ons', 'ubah', 'olmar', 'bnn', 'cornk', 'cwmr', 
    'm0', 'sp'].map((algo, i) => ({
            key: i,
            pie: <Echart option={getOption('smallpie', {
                pw: pw.map(p => p + (1 - Math.random() * 2) * Math.random() * 0.2),
                symbols,
            })} height='50px' width='50px' />,
            algorithm: algo,
            profit: (Math.random() * 4 - 2).toFixed(4),
            created: moment(randomDate(new Date(2010, 6, 10), new Date(), 0, 23)).format('YYYY-MM-DD HH:mm:ss'),
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
                    <div>{this.state.body}</div>
                </Modal>
            </div>
        )
    }
}
