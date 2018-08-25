import { GET_CANDLE_DATA, GET_CANDLE_OPTION, GETTING_CHART_DATA, GET_PIE_OPTION, GET_INDICATOR_DATA } from '../constants/data'; 

const initialState = {
    status: '',
    candleData: null,
    candleOption: null,
    pieOption: null,
    pieData: null,
    indicatorData: null,
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case GETTING_CHART_DATA:
            return {
                ...state,
                status: 'fetching',
            }
        case GET_CANDLE_DATA:
            return {
                ...state,
                candleData: action.payload,
                status: action.payload.symbol,
            };
        case GET_CANDLE_OPTION:
            return {
                ...state,
                candleOption: action.payload
            }
        case GET_PIE_OPTION:
            return {
                ...state,
                pieOption: action.payload
            }
        case GET_INDICATOR_DATA:
            return {
                ...state,
                indicatorData: action.payload,
            }
        default:
            return state;
    }
}