import { COMMENT } from 'actions/types';
import { DateTime } from 'luxon'; 


let testData = [
    {
        id: 0,
        taskID: 0,
        userID: 0,
        comment: 'Hi, this is my first comment',
        timestamp: DateTime.local(),
        lastEdited: null
    },
    {
        id: 0,
        taskID: 0,
        userID: 0,
        comment: 'Hi, this is my second comment',
        timestamp: DateTime.local(),
        lastEdited: null
    },
    {
        id: 0,
        taskID: 0,
        userID: 0,
        comment: 'Hi, this is my third comment',
        timestamp: DateTime.local(),
        lastEdited: null
    },
    {
        id: 0,
        taskID: 0,
        userID: 0,
        comment: 'Hi, this is my fourth comment',
        timestamp: DateTime.local(),
        lastEdited: null
    },
    {
        id: 0,
        taskID: 0,
        userID: 0,
        comment: 'Hi, this is my fifth comment',
        timestamp: DateTime.local(),
        lastEdited: null
    },
];

export default(state = testData, action) => {
    switch ( action.type ) {
        case COMMENT.CREATE_COMMENT:
            return action.payload;
        case COMMENT.DELETE_COMMENT:
            return action.payload;
        case COMMENT.EDIT_COMMENT:
            return action.payload;
        default: 
            return state;
    }
}