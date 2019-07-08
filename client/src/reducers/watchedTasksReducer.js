import { WATCHED_TASKS } from 'actions/types';

const testState = []

export default ( state = testState, action ) => {
    switch( action.type ) {
        case WATCHED_TASKS.WATCH_TASK:
            return [...state, action.payload]
        case WATCHED_TASKS.UNWATCH_TASK:
            return [...state].filter(taskid => taskid !== action.payload);
        default:
            return state;
    }
}

