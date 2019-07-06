import { SPRINTS } from '../actions/types';
import { DateTime } from 'luxon';
import _ from 'lodash';

const testState = [
    {
        boardID: 0,
        id: 1,
        boardPosition: 0,
        name: 'board position 0',
        timestamp: DateTime.local()
    },
    {
        boardID: 0,
        id: 2,
        boardPosition: 1,
        name: 'board position 1',
        timestamp: DateTime.local()
    },
    {
        boardID: 0,
        id: 3,
        boardPosition: 2,
        name: 'board position 2',
        timestamp: DateTime.local()
    },
    {
        boardID: 1,
        id: 4,
        boardPosition: 0,
        name: 'board position 0',
        timestamp: DateTime.local()
    },
    {
        boardID: 1,
        id: 5,
        boardPosition: 1,
        name: 'board position 1',
        timestamp: DateTime.local()
    },
    {
        boardID: 1,
        id: 6,
        boardPosition: 2,
        name: 'board position 2',
        timestamp: DateTime.local()
    },
]
    


export default (state = testState, action) => {
    switch(action.type) {
        case SPRINTS.CREATE_SPRINT:
            return action.payload;
        case SPRINTS.DELETE_SPRINT:
            return action.payload;
        case SPRINTS.CLONE_SPRINT:
            //TODO - PROBLEM, deep cloning the sprint object but comments activities etc all point are shared by parent and child sprint. need to deep clone all. Do this somewhere else.
            const { id } = _.maxBy(state, 'id');
            const newSprint = _.cloneDeep(state.find((sprint) => sprint.id === action.payload));
            newSprint.id = id + 1;
            return [ ...state, newSprint ];
        default:
            return state;
    }
}