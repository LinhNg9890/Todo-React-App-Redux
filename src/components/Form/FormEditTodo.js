import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import './formEditTodo.css';

const formEditTodoPropTypes = {
  todo: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleCancelEditTodo: PropTypes.func.isRequired,
};

const FormEditTodo = props => {
  const [todoValue, setTodoValue] = useState(props.todo.value);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  const handleKeyUp = ev => {
    // Handle ESC Key interaction
    if (ev.code === 'Escape') {
      props.handleCancelEditTodo(ev);
    }
  };

  const handleTodoChange = ev => setTodoValue(ev.target.value);

  const handleEditTodoAndResetForm = ev => {
    ev.preventDefault();

    props.handleEditTodo({
      ...props.item,
      value: todoValue,
    });

    // Reset value
    setTodoValue('');
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
              value={todoValue}
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
              disabled={!todoValue}>
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
