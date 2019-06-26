import { FLOATINGPOPUP } from './types';

export const setFloatingPopup = (popup, anchorRef) => {
    return {
            type: FLOATINGPOPUP.SET_FLOATING_POPUP,
            payload: {
                popup,
                anchorRef
            }
    }
}

export const setFloatingPopupInplace = (popup) => {

    return {
        type: FLOATINGPOPUP.SET_FLOATING_POPUP_INPLACE,
        payload: {
            popup
        }
    }
   
}

