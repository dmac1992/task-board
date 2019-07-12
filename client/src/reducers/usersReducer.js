import { USER } from "../actions/types";
import { Z_FILTERED } from "zlib";

const testState = {
  '0': {
    id: 0,
    username: 'username 0',
    fullname: 'full name 0',
    initial: 'D',
    Bio: 'This is username id 0s BIO',
    recentlyViewedBoards: [ ],
    starredBoards: []
    
  }, 
  '1': {
    id: 1,
    username: 'username 1',
    fullname: 'full name 1',
    initial: 'M',
    Bio: 'This is username id 1s BIO',
    recentlyViewedBoards: [ ],
    starredBoards: []
  }, 
  '2': {
    id: 2,
    username: 'username 2',
    fullname: 'full name 2',
    initial: 'C',
    Bio: 'This is username id 2s BIO',
    recentlyViewedBoards: [0, 1],
    starredBoards: [0]
  }, 
}

export default (state = testState, action) => {
    switch (action.type) {
      case USER.CHANGE_USERNAME:
        return action.payload;
      case USER.CHANGE_FULLNAME:
        return action.payload
      case USER.STAR_BOARD:
        var { userID, boardID } = action.payload;
        return {
          ...state,
          [userID]: {
            ...state[userID],
            starredBoards: [ ...state[userID].starredBoards, boardID ]
          } 
        }
      case USER.UNSTAR_BOARD:
        var { userID, boardID } = action.payload;
        return {
          ...state,
          [userID]: {
            ...state[userID],
            starredBoards: state[userID].starredBoards.filter(id => id !== boardID)
          }
        }
        return state;
      default:
        return state
    }
}
