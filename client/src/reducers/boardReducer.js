import { BOARDS } from 'actions/types';
import { DateTime } from 'luxon';

const testState = [
    {
        id: 0,
        adminUserID: 2,
        accessibilityLevel: 'private',
        teamID: 0,
        name: 'board 1',
        timestamp: DateTime.local(),
        backgroundColor: '#006633',
        closed: false,
    },
    {
        id: 1,
        adminUserID: 1,
        accessibilityLevel: 'private',
        teamID: null,
        name: 'board 2',
        timestamp: DateTime.local(),
        backgroundColor: '#f95c5c',
        close: false,
    },
    {
        id: 2,
        adminUserID: 0,
        accessibilityLevel: 'public',
        teamID: null,
        name: 'board 3',
        timestamp: DateTime.local(),
        backgroundColor: '#66dda5',
        close: false,
    },
]

export default ( state = testState, action ) => {
    switch (action) {
        case BOARDS.CREATE_BOARD:
            return [...state, action.payload]
        case BOARDS.DELETE_BOARD:
            return state.fitler(board => board.id !== action.payload)
        default: 
            return state;
    }
}

