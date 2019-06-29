import { CHECKLIST} from 'actions/types';

let testData = [
    {
        id: 0,
        name: 'checklist name',
        taskID: 0,
        created: new Date()
    },
    {
        id: 1,
        name: 'checklist name',
        taskID: 3,
        created: new Date()
    },
    {
        id: 2,
        name: 'checklist name',
        taskID: 4,
        created: new Date()
    },
    {
        id: 3,
        name: 'checklist name',
        taskID: 7,
        created: new Date()
    },
];



export default(state = testData, action) => {
    switch ( action.type ) {
        case CHECKLIST.CREATE_CHECKLIST:
            return action.payload;
        case CHECKLIST.DELETE_CHECKLIST:
            return action.payload;
        default: 
            return state;
    }
}