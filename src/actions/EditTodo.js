export const EDIT_TODO = 'Edit Todo';

export const EditTodo = modifiedTodo => ({
  type: EDIT_TODO,
  payload: { modifiedTodo },
});
