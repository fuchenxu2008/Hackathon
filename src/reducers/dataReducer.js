import { GET_CANDLE_DATA, GET_CANDLE_OPTION } from '../constants/data'; 

const initialState = {
    candleData: null,
    candleOption: null,
    areaData: null,
    pieData: null,
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CANDLE_DATA:
            return {
                ...state,
                candleData: action.payload
            };
        case GET_CANDLE_OPTION:
            return {
                ...state,
                candleOption: action.payload
            }
        default:
            return state;
    }
}