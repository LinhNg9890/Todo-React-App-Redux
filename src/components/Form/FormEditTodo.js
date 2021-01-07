import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../reducers/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import './formEditTodo.css';

const formEditTodoPropTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleCancelEditTodo: PropTypes.func.isRequired,
};

const FormEditTodo = props => {
  const [todoTitle, setTodotitle] = useState(props.todo.title);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  const handleKeyUp = e => {
    // Handle ESC Key interaction
    if (e.code === 'Escape') {
      props.handleCancelEditTodo(e);
    }
  };

  const handleTodoChange = e => setTodotitle(e.target.value);

  const handleEditTodoAndResetForm = async (e) => {
    e.preventDefault();

    const respAdd = await API.updateTodo({title: todoTitle, id: props.todo.id});

    if (respAdd && respAdd.data) {
      props.handleEditTodo({
        ...props.todo,
        title: todoTitle,
      });
      // Reset title
      setTodotitle('');
    }
  };

  return (
    <li className="form_edit__component list-group-item">
      <form method="POST" onSubmit={handleEditTodoAndResetForm}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="input-edit-todo-item"
              name="edit-todo-item"
              title={todoTitle}
              onChange={handleTodoChange}
              autoFocus
            />
          </div>

          <div className="col-auto">
            <button
              data-testid="form-edit-submit-button"
              type="submit"
              id="submit-edit-todo-item"
              className="btn btn-primary form_edit__button--first"
              disabled={!todoTitle}>
              <FontAwesomeIcon icon={faCheck} />
              Save
            </button>
            <button
              data-testid="form-edit-cancel-edit-button"
              id="cancel-edit-todo-item"
              type="button"
              className="btn btn-danger"
              onClick={props.handleCancelEditTodo}>
              <FontAwesomeIcon icon={faTimes} />
              Cancel
            </button>
          </div>
        </div>
      </form>
    </li>
  );
};

FormEditTodo.propTypes = formEditTodoPropTypes;

export default FormEditTodo;
