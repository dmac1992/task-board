import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import activeModalReducer from './activeModalReducer';
import floatingPopupReducer from './floatingPopupReducer';
// import boardReducer from './boardReducer';
// import sprintsReducer from './sprintsReducer';
// import tasksReducer from './tasksReducer';
// import checklistsReducer from './checklistsReducer'
// import checklistsItemReducer from './checklistsItemReducer';
// import commentsReducer from './commentsReducer';
// import activityReducer from './activityReducer';
// import usersReducer from './usersReducer'

// import homeReducer from './homeReducer.js';


// export default combineReducers({
//     header: headerReducer,
//     activeModal: activeModalReducer,
//     floatingPopup : floatingPopupReducer,
//     board: boardReducer,
//     sprints: sprintsReducer,
//     tasks: tasksReducer,
//     checklists: checklistsReducer,
//     checklistsItem: checklistsItemReducer,
//     comments: commentsReducer,
//     activity: activityReducer,
//     users: usersReducer
// });

export default combineReducers({
    header: headerReducer,
    activeModal: activeModalReducer,
    floatingPopup: floatingPopupReducer
})

