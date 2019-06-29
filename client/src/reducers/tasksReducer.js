import { TASKS } from '../actions/types';

const testState = [
    {
        ID: 0,
        name: 'task name',
        description: 'task description',
        created: new Date() ,
        sprintID: 1,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 1,
        name: 'task name',
        description: 'task description',
        created: new Date() ,
        sprintID: 1,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 2,
        name: 'task name',
        description: 'task description',
        created: new Date() ,
        sprintID: 1,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 3,
        name: 'task name',
        description: 'task description',
        created: new Date() ,
        sprintID: 2,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 4,
        name: 'task name',
        description: 'task description',
        created: new Date() ,
        sprintID: 2,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 5,
        name: 'task name',
        description: 'task description',
        created: new Date() ,
        sprintID: 2,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 6,
        name: 'task name',
        description: 'task description',
        created: new Date() ,
        sprintID: 1,
        userID: 0,
        checklistID: null,
    },
    {
        ID: 7,
        name: 'task name',
        description: 'task description',
        created: new Date() ,
        sprintID: 2,
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