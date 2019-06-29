import { CHECKLIST_ITEM } from 'actions/types';

let testData = [
    {
        id: 0,
        checklistID: 0,
        name: 'checklist item name',
        checked: false,
        created: new Date()
    },
   
    {
        id: 1,
        checklistID: 0,
        name: 'checklist item name',
        checked: false,
        created: new Date()
    },
   
    {
        id: 2,
        checklistID: 1,
        name: 'checklist item name',
        checked: false,
        created: new Date()
    },
   
    {
        id: 3,
        checklistID: 1,
        name: 'checklist item name',
        checked: false,
        created: new Date()
    },
];



export default(state = testData, action) => {
    switch ( action.type ) {
        case CHECKLIST_ITEM.TOGGLE_CHECKLIST_ITEM:
            return action.payload;
        case CHECKLIST_ITEM.CREATE_CHECKLIST_ITEM:
            return action.payload;
        case CHECKLIST_ITEM.DELETE_CHECKLIST_ITEM:
            return action.payload;
        default: 
            return state;
    }
}