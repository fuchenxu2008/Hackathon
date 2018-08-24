import { GET_CANDLE_DATA, GET_CANDLE_OPTION } from '../constants/data';
import * as api from '../api/chartData';
import { getOption } from '../components/Echarts/options';

export const getChartData = (query) => (dispatch) => {
    dispatch(getCandleData(query));
}

export const getCandleData = (query) => (dispatch) => {
    api.getCandleData(query).then(res => {
        dispatch({
            type: GET_CANDLE_DATA,
            payload: res.data,
        })
        dispatch({
            type: GET_CANDLE_OPTION,
            payload: getOption('price', res.data)
        })
    })
}