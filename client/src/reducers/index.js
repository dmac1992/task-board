import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import activeModalReducer from './activeModalReducer';
import floatingPopupReducer from './floatingPopupReducer';

// import homeReducer from './homeReducer.js';


export default combineReducers({
    header: headerReducer,
    activeModal: activeModalReducer,
    floatingPopup : floatingPopupReducer
});

