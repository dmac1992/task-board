import { combineReducers } from 'redux';
import headerReducer from './headerReducer.js';
import searchReducer from './searchInputsReducer';
import activeModalReducer from './activeModalReducer';
import boardsPopupShowingReducer from './boardsPopupShowingReducer';

export default combineReducers({
    header: headerReducer,
    search: searchReducer,
    activeModal: activeModalReducer,
    boardsPopupShowing: boardsPopupShowingReducer
});