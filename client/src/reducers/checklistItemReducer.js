import _ from 'lodash';

import { CHECKLIST_ITEM } from 'actions/types';



let testData = [
    {
        id: 0,
        checklistID: 0,
        name: 'checklist item name',
        checked: true,
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
            action.payload.id = _.maxBy(state, 'id').id + 1; //TODO - logic put in place for front end demo, until back end is implemented.
            return [...state, action.payload];
        case CHECKLIST_ITEM.DELETE_CHECKLIST_ITEM:
            return state.filter((item) => item.id !== action.payload);
        default: 
            return state;
    }
}