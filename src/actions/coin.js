import { GET_COIN_LIST } from '../constants/coin';
import * as api from '../api/coinData';

export const getCoinList = () => (dispatch) => {
    api.getCoinList().then(res => res.data).then(res => {
        if (res) {
            dispatch({
                type: GET_COIN_LIST,
                payload: res.data
            })
        }  
    })
}