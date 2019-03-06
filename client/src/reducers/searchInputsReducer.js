import { SEARCH } from 'actions/types';

const searchDefaultState = {
    searchBoardsInput: "",
    searchGenericInput: ""
};

export default function(state = searchDefaultState, action) {
    switch (action.type) {
        case SEARCH.BOARD_INPUT: 
            return { ...state, ['searchBoardsInput']: action.payload };
        case SEARCH.GENERIC_INPUT: 
            return { ...state, ['searchGenericInput']: action.payload };
        default:
            return state;
    }
}