import { ACTIVITY } from 'actions/types';
import ACTIVITY_TYPES from 'utilityFiles/ActivityTypes';


let testData = [
    {
        id: 0,
        taskID: 0,
        type: ACTIVITY_TYPES.ADD_COMMENT,
        timestamp: new Date()
    },
    {
        id: 1,
        taskID: 0,
        type: ACTIVITY_TYPES.ADD_COMMENT,
        timestamp: new Date()
    },
    {
        id: 2,
        taskID: 0,
        type: ACTIVITY_TYPES.ADD_COMMENT,
        timestamp: new Date()
    },
    {
        id: 3,
        taskID: 0,
        type: ACTIVITY_TYPES.ADD_COMMENT,
        timestamp: new Date()
    },
    {
        id: 4,
        taskID: 0,
        type: ACTIVITY_TYPES.ADD_COMMENT,
        timestamp: new Date()
    },
    {
        id: 5,
        taskID: 0,
        type: ACTIVITY_TYPES.ADD_COMMENT,
        timestamp: new Date()
    }
    
]

export default (state = testData, action) => {
    switch ( action.type ) {
        case ACTIVITY.RECORD_ACTIVITY:
            return action.payload;
        default:
            return state;
    }
    
}
