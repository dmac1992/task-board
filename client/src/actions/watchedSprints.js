import { WATCHED_SPRINTS } from 'actions/types';

export const watchSprint = (sprintID) => {
    return {
        type: WATCHED_SPRINTS.WATCH_SPRINT,
        payload: sprintID
    }
}

export const unwatchSprint = (sprintID) => {
    return {
        type: WATCHED_SPRINTS.UNWATCH_SPRINT,
        payload: sprintID
    }
}