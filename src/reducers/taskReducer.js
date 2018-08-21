import { RUN_MODE, FINISH_MODE } from '../constants/task'; 

const initialState = {
    runningMode: null,
    taskData: [],
    lastRun: null,
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case RUN_MODE:
            return {
                ...state,
                runningMode: action.payload,
                lastRun: action.payload,
            };
        case FINISH_MODE:
            return {
                ...state,
                runningMode: null,
                taskData: [action.payload, ...state.taskData]
            };
        default:
            return state;
    }
}