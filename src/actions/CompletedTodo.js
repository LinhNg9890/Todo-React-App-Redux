export const COMPLETED_TODO = 'Completed Todo';

export const CompletedTodo = modifiedTodo => ({
    type: COMPLETED_TODO,
    payload: { modifiedTodo }
});