import { TASKS } from '../actions/types';


const testState = [
    {
        ID: 0,
        name: 'task id pos 7',
        description: 'task description',
        created: new Date() ,
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 7
    },
    {
        ID: 1,
        name: 'task id 1 pos 6',
        description: 'task description',
        created: new Date() ,
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 6
    },
    {
        ID: 2,
        name: 'task id 2 pos 5',
        description: 'task description',
        created: new Date() ,
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 5
    },
    {
        ID: 3,
        name: 'task id 3 pos 4',
        description: 'task description',
        created: new Date() ,
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 4
    },
    {
        ID: 4,
        name: 'task id 4 pos 3',
        description: 'task description',
        created: new Date() ,
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 3
    },
    {
        ID: 5,
        name: 'task id 5 pos 2',
        description: 'task description',
        created: new Date() ,
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 2
    },
    {
        ID: 6,
        name: 'task id 6 pos 1',
        description: 'task description',
        created: new Date() ,
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 1
    },
    {
        ID: 7,
        name: 'task id 7 pos 0',
        description: 'task description',
        created: new Date() ,
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 0
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