import { GET_CANDLE_DATA, GET_CANDLE_OPTION, GETTING_CHART_DATA } from '../constants/data';
import * as api from '../api/chartData';
import { getOption } from '../components/Echarts/options';

export const getChartData = (query) => (dispatch) => {
    dispatch(getCandleData(query));
}

export const getCandleData = (query) => (dispatch) => {
    dispatch({
        type: GETTING_CHART_DATA,
    })
    api.getCandleData(query).then(res => {
        dispatch({
            type: GET_CANDLE_DATA,
            payload: { ...res.data, symbol: query.symbol }
        })
        dispatch({
            type: GET_CANDLE_OPTION,
            payload: getOption('price', res.data)
        })
    })
}