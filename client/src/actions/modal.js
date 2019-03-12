import { SET_ACTIVE_MODAL } from './types';

export const setActiveModal = (modal) => {
    return {
        type: SET_ACTIVE_MODAL,
        payload: modal
    }
}