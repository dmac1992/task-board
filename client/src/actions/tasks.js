import { TASK } from 'actions/types';

export const createTask = (newTask) => {
    return {
        type: TASK.CREATE_TASK,
        payload: newTask
    }
}

export const createTasks = (newTasks) => {
    return {
        type: TASK.CREATE_TASKS,
        payload: newTasks
    }
}

export const updateTasks = (updatedTasks) => {
    return {
        type: TASK.UPDATE_TASKS,
        payload: updatedTasks
    }
}

export const updateTaskDescription = (description, id) => {
    return {
        type: TASK.UPDATE_DESCRIPTION,
        payload: {
            description,
            id
        }
    }
}

export const updateTaskName = (name, id) => {
    return {
        type: TASK.UPDATE_NAME,
        payload: {
            name, 
            id
        }
    }
}

export const moveSprintTasksToNewSprint = (sprintID, newSprintID) => {
    return {
        type: TASK.MOVE_SPRINT_TASKS_TO_NEWSPRINT,
        payload: {
            sprintID,
            newSprintID
        }
    }
}

export const archiveTask = (taskID) => {
    return {
        type: TASK.ARCHIVE_TASK,
        payload: taskID
    }
}

export const moveTask = (taskID, targetSprintID, targetBoardID) => {
    return {
        type: TASK.MOVE_TASK,
        payload: {
            taskID,
            targetSprintID,
            targetBoardID
        }
    }
}

export const toggleWatchTask = (taskID) => {
    return {
        type: TASK.TOGGLE_WATCH_TASK,
        payload: taskID
    }
}




