import { COMMENT } from 'actions/types';

export const deleteComment = (id) => {
    console.log('action handler invoked');
    return {
        type: COMMENT.DELETE_COMMENT,
        payload: id
    }
}


// const createComment = () => {};
// const updateComment = (id, newComment) => {};