import { BOARDS } from 'actions/types';

const initialState = {
    id: 0,
    accessibilityLevel: 'private',
    teamID: 0,
    name: 'test board',
    timestamp: new Date()
}

export default ( state = {}, action ) => {
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

