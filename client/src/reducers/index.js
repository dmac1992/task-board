import { combineReducers } from 'redux';
import headerReducer from './headerReducer.js';
import searchReducer from './searchInputsReducer';


export default combineReducers({
    header: headerReducer,
    search: searchReducer
})