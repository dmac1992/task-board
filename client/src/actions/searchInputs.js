import { SEARCH } from './types';


export const update_board_search_input = (input) => {
    return {
        type: SEARCH.BOARD_INPUT,
        payload: input
    }
}

export const update_generic_search_input = (input) => {
    return {
        type: SEARCH.GENERIC_INPUT,
        payload: input
    }
}