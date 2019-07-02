import { COMMENT } from 'actions/types';

let testData = [
    {
        id: 0,
        taskID: 0,
        userID: 0,
        comment: 'Hi, this is my first comment',
        timestamp: new Date('2000-01-5 03:30:00'),
        lastEdited: null
    },
    {
        id: 0,
        taskID: 0,
        userID: 0,
        comment: 'Hi, this is my second comment',
        timestamp: new Date('2000-02-5 03:30:00'),
        lastEdited: null
    },
    {
        id: 0,
        taskID: 0,
        userID: 0,
        comment: 'Hi, this is my third comment',
        timestamp: new Date('2000-03-5 03:30:00'),
        lastEdited: null
    },
    {
        id: 0,
        taskID: 0,
        userID: 0,
        comment: 'Hi, this is my fourth comment',
        timestamp: new Date('2000-04-5 03:30:00'),
        lastEdited: null
    },
    {
        id: 0,
        taskID: 0,
        userID: 0,
        comment: 'Hi, this is my fifth comment',
        timestamp: new Date('2000-05-5 03:30:00'),
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