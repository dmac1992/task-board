import { SPRINTS } from 'actions/types';

// export const createSprint = () => {
//     return {
//         type: SPRINTS.CREATE_SPRINT,
//         payload: sprintID
//     }
// }
export const cloneSprint = (sprintID) => {

    return {
        type: SPRINTS.CLONE_SPRINT,
        payload: sprintID
    }

}

// export const deleteSprint = () => {
//     return {
//         type: SPRINTS.DELETE_SPRINT,
//         payload: sprintID
//     }
// }

// export const reorderSprint = () => {
//     return {
//         type: SPRINTS.REORDER_SPRINT,
//         payload: sprintID
//     }
// }