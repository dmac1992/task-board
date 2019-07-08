import { WATCHED_TASKS } from 'actions/types';

const watchTask = (taskID) => {
    return {
        type: WATCHED_TASKS.WATCH_TASK,
        payload: taskID
    }
}

const unwatchTask = (taskID) => {
    return {
        type: WATCHED_TASKS.UNWATCH_TASK,
        payload: taskID
    }
}