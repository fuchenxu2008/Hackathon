import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import coinReducer from './coinReducer';

export const createReducer = () => combineReducers({
  data: dataReducer,
  coin: coinReducer
})


