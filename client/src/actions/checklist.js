import { CHECKLIST } from './types';

export const deleteChecklist = (checklistID) => {
    return {
        type: CHECKLIST.DELETE_CHECKLIST,
        payload: checklistID
    }
}