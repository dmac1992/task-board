import { SPRINTS } from '../actions/types';

const testState = [
    {
        boardID: 0,
        id: 1,
        name: 'sprint with id 1, board id 0',
        timestamp: new Date()
    },
    {
        boardID: 0,
        id: 2,
        name: 'sprint with id 2, board id 0',
        timestamp: new Date()
    },
    {
        boardID: 0,
        id: 3,
        name: 'sprint with id 3, board id 0',
        timestamp: new Date()
    },
    {
        boardID: 1,
        id: 4,
        name: 'sprint with id 4, board id 0',
        timestamp: new Date()
    },
    {
        boardID: 1,
        id: 5,
        name: 'sprint with id 5, board id 0',
        timestamp: new Date()
    },
    {
        boardID: 1,
        id: 6,
        name: 'sprint with id 6, board id 0',
        timestamp: new Date()
    },
]
    


export default (state = testState, action) => {
    switch(action.type) {
        case SPRINTS.CREATE_SPRINT:
            return action.payload;
        case SPRINTS.DELETE_SPRINT:
            return action.payload;
        default:
            return state;
    }
}