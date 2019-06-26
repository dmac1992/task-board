import { FLOATINGPOPUP } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {

    switch(action.type) {
        case FLOATINGPOPUP.SET_FLOATING_POPUP:
            return {
                floatingPopup: action.payload.popup,
                anchorRef: action.payload.anchorRef
            }
        case FLOATINGPOPUP.SET_FLOATING_POPUP_INPLACE:
            return {
                floatingPopup: action.payload.popup,
                anchorRef: state.anchorRef
            }
        default:
            return state;
    }
}