import { USER } from "../actions/types";

const testState = {
  '0': {
    id: 0,
    username: 'username 0',
    fullname: 'full name 0',
    initial: 'D',
    Bio: 'This is username id 0s BIO',
    recentlyViewedBoards: [ ],
    starredBoards: [],
  }, 
  '1': {
    id: 1,
    username: 'username 1',
    fullname: 'full name 1',
    initial: 'M',
    Bio: 'This is username id 1s BIO',
    recentlyViewedBoards: [ ],
    starredBoards: [],
  }, 
  '2': {
    id: 2,
    username: 'username 2',
    fullname: 'full name 2',
    initial: 'C',
    Bio: 'This is username id 2s BIO',
    recentlyViewedBoards: [0, 1],
    starredBoards: [0],
  }, 
}
//TODO - SEPERATE CURRENT USER FROM OTHERS EVENTUALLY, CURRENT USER REQUIRES A WEALTH OF DATA THAT GENERAL USERS CAN DO WITHOUT
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
      case USER.REMOVE_RECENT:
        var { userID, boardID } = action.payload;
        return {
          ...state,
          [userID]: {
            ...state[userID],
            recentlyViewedBoards: state[userID].recentlyViewedBoards.filter(id => id !== boardID)
          }
        }
      default:
        return state
    }
}
