export const SELECT_EDIT_TODO = 'Select Edit Todo';

export const SelectEditTodo = id => ({
  type: SELECT_EDIT_TODO,
  payload: { id },
});
