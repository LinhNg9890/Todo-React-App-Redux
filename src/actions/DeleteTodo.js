export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO = 'DELETE_TODO';

export const DeleteTodoRequest = () => {
    return {
        type: DELETE_TODO_REQUEST
    }
};

export const DeleteTodo = selectTodoId => ({
    type: DELETE_TODO,
    payload: { id: selectTodoId }
    
});