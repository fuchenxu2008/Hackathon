import { RUN_MODE, FINISH_MODE } from '../constants/task';
import { getTaskData } from '../api/taskData';

export const runMode = (mode, time) => (dispatch) => {
    dispatch(runningMode(mode));
    setTimeout(() => dispatch(finishMode(mode)), time)
}


export const runningMode = (mode) => ({
    type: RUN_MODE,
    payload: mode,
})

export const finishMode = (mode) => ({
    type: FINISH_MODE,
    payload: getTaskData(mode),
})