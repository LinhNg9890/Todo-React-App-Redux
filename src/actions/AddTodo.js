export const ADD_TODO = 'Add Todo';

export const AddTodo = todoValue => ({
    type: ADD_TODO,
    payload: { value: todoValue }
});