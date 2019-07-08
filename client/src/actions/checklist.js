import { CHECKLIST } from './types';

export const deleteChecklist = (checklistID) => {
    return {
        type: CHECKLIST.DELETE_CHECKLIST,
        payload: checklistID
    }
}

export const createChecklist = () => { }

export const createChecklists = (newChecklists) => { 
    return {
        type: CHECKLIST.CREATE_CHECKLISTS,
        payload: newChecklists
    }
}