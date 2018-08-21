import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

export const createReducer = () => combineReducers({
  task: taskReducer,
})


