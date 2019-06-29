import { COMMENT } from 'actions/types';

let testData = [
    {
        id: 0,
        userID: 0,
        comment: 'Hi, this is my comment',
        created: new Date(),
        lastEdited: null
    },
    {
        id: 0,
        userID: 0,
        comment: 'Hi, this is my comment',
        created: new Date(),
        lastEdited: null
    },
    {
        id: 0,
        userID: 0,
        comment: 'Hi, this is my comment',
        created: new Date(),
        lastEdited: null
    },
    {
        id: 0,
        userID: 0,
        comment: 'Hi, this is my comment',
        created: new Date(),
        lastEdited: null
    },
    {
        id: 0,
        userID: 0,
        comment: 'Hi, this is my comment',
        created: new Date(),
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