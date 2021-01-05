import { v1 } from 'uuid';

import { ADD_TODO } from '../actions/AddTodo';
import { CANCEL_EDIT_TODO } from '../actions/CancelEditTodo';
import { DELETE_TODO } from '../actions/DeleteTodo';
import { EDIT_TODO } from '../actions/EditTodo';
import { COMPLETED_TODO } from '../actions/CompletedTodo';
import { SELECT_EDIT_TODO } from '../actions/SelectEditTodo';

const TodosReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const id = v1();
      const todo = {
        value: action.payload.value,
        id,
        completed: false,
      };

      return { ...state, todos: [...state.todos, todo] };
    }

    case CANCEL_EDIT_TODO: {
      const newState = state.todos.length ? { ...state, editingTodo: {} } : { ...state };
      return newState;
    }

    case DELETE_TODO: {
      const todos = state.todos.filter(({ id }) => id !== action.payload.id);
      return { ...state, todos };
    }

    case EDIT_TODO: {
      const todos = state.todos.map(todo => {
        if (todo.id === action.payload.modifiedTodo.id) {
          todo.value = action.payload.modifiedTodo.value;
        }

        return todo;
      });

      return { ...state, todos, editingTodo: {} };
    }

    case COMPLETED_TODO: {
      const todos = state.todos.map(todo => {
        if (todo.id === action.payload.modifiedTodo.id) {
          const newTodo = { ...todo };
          newTodo.completed = !newTodo.completed;
          return newTodo;
        }

        return todo;
      });

      return { ...state, todos };
    }

    case SELECT_EDIT_TODO: {
      const todo = state.todos.find(({ id }) => id === action.payload.id);
      return { ...state, editingTodo: todo };
    }

    default: {
      return state;
    }
  }
};

export default TodosReducer;
