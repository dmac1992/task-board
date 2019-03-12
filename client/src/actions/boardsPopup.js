import { BOARDS_POPUP } from './types';

export const boardsPopupToggleStarred = () => {
    return {
        TYPE: BOARDS_POPUP.STARRED_BOARDS
    }
}

export const boardsPopupToggleRecent = () => {
    return {
        TYPE: BOARDS_POPUP.RECENT_BOARDS
    }
}

export const boardsPopupTogglePersonal = () => {
    return {
        TYPE: BOARDS_POPUP.PERSONAL_BOARDS
    }
}