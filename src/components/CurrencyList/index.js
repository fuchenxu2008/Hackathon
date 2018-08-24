import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCoinList } from '../../actions/coin';

import './index.css';

export class CurrencyList extends Component {
    componentDidMount() {
        this.props.getCoinList();
    }

    render() {
        return (
        <div className='currency-list'>
            <table>
                
            </table>
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


