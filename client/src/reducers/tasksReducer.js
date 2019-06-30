import { TASKS } from '../actions/types';

const testState = [
    {
        ID: 0,
        name: 'task name 0',
        description: 'task description',
        created: new Date() ,
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 1,
        name: 'task name 1',
        description: 'task description',
        created: new Date() ,
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 2,
        name: 'task name 2',
        description: 'task description',
        created: new Date() ,
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 3,
        name: 'task name 3',
        description: 'task description',
        created: new Date() ,
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 4,
        name: 'task name 4',
        description: 'task description',
        created: new Date() ,
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 5,
        name: 'task name 5',
        description: 'task description',
        created: new Date() ,
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 6,
        name: 'task name 6',
        description: 'task description',
        created: new Date() ,
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 7,
        name: 'task name 7',
        description: 'task description',
        created: new Date() ,
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
    },
]

export default (state = testState, action) => {
    switch (action.type) {
        case TASKS.CREATE_TASK:
            return action.payload;
        case TASKS.DELETE_TASK:
            return action.payload;
        default:
            return state
    }
}