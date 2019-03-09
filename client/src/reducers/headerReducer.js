import { HEADER } from 'actions/types';

const headerDefaultState = {
    activeLeftPopUp: null,
    activeRightPopUp: null
}

export default function(state = headerDefaultState, action) {
    switch (action.type) {
        case HEADER.TOGGLE_LEFT_POPUP:
            if (state.activeLeftPopUp === action.payload) {
                return { ...state, activeLeftPopUp:null}  
            };
            return { ...state, activeLeftPopUp: action.payload} 
        case HEADER.TOGGLE_RIGHT_POPUP:
            if (state.activeRightPopUp === action.payload) { 
                return { ...state, activeRightPopUp: null };
            };
            return { ...state, activeRightPopUp:action.payload } ;
        case HEADER.CLEAR_ACTIVE_LEFT_POPUP:
            return { ...state, activeLeftPopUp: null}
        case HEADER.CLEAR_ACTIVE_RIGHT_POPUP:
            return { ...state, activeRightPopUp: null}
        case HEADER.CLEAR_ACTIVE_POPUPS:
            return { ...state, activeRightPopUp: null, activeLeftPopUp: null};
        default:
            return state;
    }
}