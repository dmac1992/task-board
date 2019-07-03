import { BOARDS } from 'actions/types';
import { DateTime } from 'luxon';

const testState = [
    {
        id: 0,
        accessibilityLevel: 'private',
        teamID: 0,
        name: 'board 1',
        timestamp: DateTime.local()
    },
    {
        id: 1,
        accessibilityLevel: 'private',
        teamID: 0,
        name: 'board 2',
        timestamp: DateTime.local()
    },
    {
        id: 2,
        accessibilityLevel: 'public',
        teamID: 0,
        name: 'board 3',
        timestamp: DateTime.local()
    },

    
]

export default ( state = testState, action ) => {
    switch (action) {
        case BOARDS.LOAD_BOARD:
            return action.payload;
        case BOARDS.CREATE_BOARD:
            return action.payload;
        case BOARDS.DELETE_BOARD:
            return action.payload;
        default: 
            return state;
    }
}

