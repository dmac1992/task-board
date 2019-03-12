import { BOARDS_POPUP } from 'actions/types';

const initialState = {
    starredBoardsOpen: false,
    recentBoardsOpen: false,
    personalBoardsOpen: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case BOARDS_POPUP.STARRED_BOARDS:
      return { ...state, starredBoardsOpen: !state["starredBoardsOpen"]  }
    case BOARDS_POPUP.RECENT_BOARDS:
      return { ...state, recentBoardsOpen: !state["recentBoardsOpen"] }
    case BOARDS_POPUP.PERSONAL_BOARDS:
      return { ...state, personalBoardsOpen: !state["personalBoardsOpen"] }
    default:
      return state
  }
}
