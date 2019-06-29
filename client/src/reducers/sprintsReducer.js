import { SPRINTS } from '../actions/types';

const intialState = null;

export default (state = intialState, action) => {
    switch(action.type) {
        case SPRINTS.CREATE_SPRINT:
            return action.payload;
        case SPRINTS.DELETE_SPRINT:
            return action.payload;
    }
}