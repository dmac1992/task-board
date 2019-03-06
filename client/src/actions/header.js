import { HEADER } from './types';

export const setActiveLeftPopUp = (popUp) => {
    return {
        type: HEADER.TOGGLE_LEFT_POPUP,
        payload: popUp
    }
}

export const setActiveRightPopUp = (popUp) => {
    return {
        type: HEADER.TOGGLE_RIGHT_POPUP,
        payload: popUp
    }
}

export const clearActiveLeftPopUp = () => {
    return {
        type: HEADER.CLEAR_ACTIVE_LEFT_POPUP,
        payload: null
    }
}

export const clearActiveRightPopUp = () => {
    return {
        type: HEADER.CLEAR_ACTIVE_RIGHT_POPUP,
        payload: null
    }
}

export const clearActivePopUps = () => {
    return {
        type: HEADER.CLEAR_ACTIVE_POPUPS,
        payload: null
    }
}