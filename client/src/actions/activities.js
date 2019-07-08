import { ACTIVITY } from 'actions/types';

export const createActivity = () => { };

export const createActivities = (newActivities) => { 
    return {
        type: ACTIVITY.CREATE_ACTIVITIES,
        payload: newActivities
    }
};