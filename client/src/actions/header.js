import { HEADER } from './types';

export const setActiveLeftPopUp = (popUp) => {
    console.log("set active left popup called");
    return {
        type: HEADER.TOGGLE_LEFT_POPUP,
        payload: popUp
    }
}

export const setActiveRightPopUp = (popUp) => {
    console.log("set active right popup called");
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