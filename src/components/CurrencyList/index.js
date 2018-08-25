import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTable from '../DataTable';
import { getCoinList } from '../../actions/coin';

import './index.css';

export class CurrencyList extends Component {
    componentDidMount() {
        this.props.getCoinList();
    }

    render() {
        const columns = [{
            title: 'Icon',
            dataIndex: 'icon',
        },{
            title: 'Name',
            dataIndex: 'name',
        }, {
            title: 'Symbol',
            dataIndex: 'symbol',
        }, {
            title: 'Price',
            dataIndex: 'price',
        }, {
            title: 'Market Cap',
            dataIndex: 'market_cap',
        }];

        const data = this.props.coinList.map(coin => ({
            key: coin.id,
            icon: <img style={{ width: '50px' }} src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} alt='' />,
            name: coin.name,
            symbol: coin.symbol,
            price: `$${coin.quote.USD.price}`,
            market_cap: `$${coin.quote.USD.market_cap}`,
        }));

        return (
        <div className='currency-list'>
            <DataTable icon='pay-circle-o' title='Currency List' columns={columns} data={data} />
        </div>
        )
    }
}

const mapStateToProps = ({ coin }) => ({
    coinList: coin.coinList,
});

const mapDispatchToProps = (dispatch) => ({
    getCoinList: () => dispatch(getCoinList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);


