import { GET_CANDLE_DATA, GET_CANDLE_OPTION, GETTING_CHART_DATA, GET_PIE_OPTION, GET_INDICATOR_DATA } from '../constants/data';
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
        dispatch({
            type: GET_PIE_OPTION,
            payload: getOption('pie', res.data)
        })
        dispatch({
            type: GET_INDICATOR_DATA,
            payload: {
                average: res.data.ind[10],
                portfolio_value: res.data.ind[0],
                max_drawdown: res.data.ind[2],
                sharpe_ratio: res.data.ind[1],
                sortino_ratio: res.data.ind[5],
                negative_day: res.data.ind[7],
                negative_periods: res.data.ind[4],
                negative_week: res.data.ind[9],
                postive_day: res.data.ind[6],
                postive_periods: res.data.ind[3],
                postive_week: res.data.ind[8],
            }
        })
    })
}