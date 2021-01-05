export const DELETE_TODO = 'Delete Todo';

export const DeleteTodo = selectTodoId => ({
    type: DELETE_TODO,
    payload: { id: selectTodoId }
});