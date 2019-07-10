import { TASK } from '../actions/types';
import { DateTime } from 'luxon';

const testState = [
    {
        ID: 0,
        name: 'abvcx',
        description: 'task description',
        created: DateTime.utc(2017, 1, 12)  ,
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 7
    },
    {
        ID: 1,
        name: 'sdfsdf',
        description: 'task description',
        created: DateTime.utc(2017, 2, 12)  ,
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 6
    },
    {
        ID: 2,
        name: 'cvbcvb',
        description: 'task description',
        created: DateTime.utc(2017, 3, 12),
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 5
    },
    {
        ID: 3,
        name: 'tryutyu',
        description: 'task description',
        created: DateTime.utc(2017, 4, 12),
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 4
    },
    {
        ID: 4,
        name: 'sdfsdf',
        description: 'task description',
        created: DateTime.utc(2017, 5, 12)  ,
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 3
    },
    {
        ID: 5,
        name: 'iopiopio',
        description: 'task description',
        created: DateTime.utc(2017, 6, 12),
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 2
    },
    {
        ID: 6,
        name: 'vbnvbn',
        description: 'task description',
        created: DateTime.utc(2017, 7, 12),
        sprintID: 1,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 1
    },
    {
        ID: 7,
        name: 'zxcvzxczx',
        description: 'task description',
        created: DateTime.utc(2017, 8, 12),  
        sprintID: 2,
        boardID: 0,
        userID: 0,
        checklistID: null,
        sprintPosition: 0
    },
]

export default (state = testState, action) => {
    switch (action.type) {
        case TASK.CREATE_TASK:
            return [...state, action.payload]
        case TASK.DELETE_TASK:
            return action.payload;
        case TASK.CREATE_TASKS:
            return [...state, ...action.payload];
        case TASK.UPDATE_TASKS: 
            let updatedTasks = action.payload;
            let newState = [...state];
            updatedTasks.forEach(updatedTask => {
                newState.forEach((task, index) => {
                    if ( task.ID === updatedTask.ID)
                        Object.assign(newState[index], updatedTask)
                })
            })
            return newState;
        case TASK.UPDATE_DESCRIPTION:
            return state.map(task => {
                if ( task.ID === action.payload.id) {
                    return {
                        ...task,
                        description: action.payload.description
                    }
                }
                return task;
            })
        case TASK.MOVE_SPRINT_TASKS_TO_NEWSPRINT:
            return state.map(task => {
                if (task.sprintID === action.payload.sprintID) {
                    return {
                        ...task,
                        sprintID: action.payload.newSprintID
                    }
                }
                return task;
            })
        default:
            return state
    }
}