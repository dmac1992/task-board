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
            return [ ...state, action.payload];
        case SPRINTS.DELETE_SPRINT:
            return action.payload;
        case SPRINTS.UPDATE_SPRINTS:
            let updatedSprints = action.payload;
            let newState = [...state];
            updatedSprints.forEach(updatedSprint => {
                newState.forEach((sprint, index) => {
                    if ( sprint.id === updatedSprint.id )
                        Object.assign(newState[index], updatedSprint);
                })
            })
            return newState;
        case SPRINTS.UPDATE_SPRINT_NAME:
            debugger;
            return state.map(sprint => {
                if (sprint.id === action.payload.sprintID) {
                    return {
                        ...sprint,
                        name: action.payload.newName
                    }
                }
                return sprint
            })
        default:
            return state;
    }
}