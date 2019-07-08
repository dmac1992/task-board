import { WATCHED_SPRINTS } from 'actions/types';

const testState = [1]

export default ( state = testState, action ) => {
    switch( action.type ) {
        case WATCHED_SPRINTS.WATCH_SPRINT:
            return [...state, action.payload]
        case WATCHED_SPRINTS.UNWATCH_SPRINT:
            return [...state].filter(sprintid => sprintid !== action.payload);
        default:
            return state;
    }
}

