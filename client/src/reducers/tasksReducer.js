import { TASKS } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case TASKS.CREATE_TASK:
            return action.payload;
        case TASKS.DELETE_TASK:
            return action.payload;
        default:
            return state
    }
}