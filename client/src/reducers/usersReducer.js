import { USER } from "../actions/types";

const testState = {
  '0': {
    id: 0,
    username: 'username 0',
    fullname: 'full name 0',
    initial: 'D'
  }, 
  '1': {
    id: 1,
    username: 'username 1',
    fullname: 'full name 1',
    initial: 'M'
  }, 
  '2': {
    id: 2,
    username: 'username 2',
    fullname: 'full name 2',
    initial: 'C'
  }, 
}

export default (state = testState, action) => {
    switch (action.type) {
      case USER.CHANGE_USERNAME:
        return action.payload;
      case USER.CHANGE_FULLNAME:
        return action.payload
      default:
        return state
    }
}
