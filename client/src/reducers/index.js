import { combineReducers } from 'redux';
import headerReducer from './headerReducer.js';

export default combineReducers({
    header: headerReducer
})