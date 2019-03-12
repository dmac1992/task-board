import { SET_ACTIVE_MODAL } from "../actions/types";

const initialState = {
    activeModal: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_ACTIVE_MODAL:
        return payload;
      default:
        return state
    }
}
