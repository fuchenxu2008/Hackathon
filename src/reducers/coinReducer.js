import { GET_COIN_LIST } from '../constants/coin'; 

const initialState = {
    coinList: [],
};

export default function coinReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COIN_LIST:
            return {
                ...state,
                coinList: action.payload
            };
        default:
            return state;
    }
}