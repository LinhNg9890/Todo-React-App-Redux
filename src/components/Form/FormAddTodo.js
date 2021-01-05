import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const formAddTodopropTypes = {
    handleAddTodo: PropTypes.func.isRequired
};

const FormAddTodo = ({ handleAddTodo }) => {
    const [todoValue, setTodoValue] = useState('');

    const handleSubmitAndResetForm = e => {
        e.preventDefault();

        handleAddTodo(todoValue);

        // Reset value
        setTodoValue('');
    };

    const handleTodoChange = e => setTodoValue(e.target.value);

    return (
        <form method="POST" autoComplete="on" onSubmit={handleSubmitAndResetForm}>
                <div className="row">
                    <div className="col-row">
                    <input
                        type="text"
                        className="form-control"
                        id="new-todo-item"
                        name="new-todo-item"
                        placeholder="You text here..."
                        aria-label="Todo item description"
                        value={todoValue}
                        onChange={handleTodoChange}
                        autoFocus
                    />
                    </div>

                    <div className="col-auto">
                        <button
                            type="submit"
                            data-testid="form-submit"
                            className="btn btn-success"
                            disabled={!todoValue}
                            aria-label="Add todo item">
                            <FontAwesomeIcon icon={faPlus} />
                            Add Todo
                        </button>
                    </div>
                </div>
            </form>
    );
};

FormAddTodo.prototype = formAddTodopropTypes;

export default FormAddTodo;
