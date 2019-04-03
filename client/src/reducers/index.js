import { combineReducers } from 'redux';
import headerReducer from './headerReducer.js';
import activeModalReducer from './activeModalReducer.js';
// import homeReducer from './homeReducer.js';


export default combineReducers({
    header: headerReducer,
    activeModal: activeModalReducer,
});

