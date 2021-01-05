import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './FormTodo.css';

import PropertyBarContainer from '../../containers/PropertyBarContainer';
import Checkout from '../ElementSticky/checkout';

const formTodoPropTypes = {
  todo: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleCompletedTodo: PropTypes.func.isRequired,
};

const FormTodo = props => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const updateDisplayMenu = bool => {
    if (displayMenu !== bool) {
      setDisplayMenu(bool);
    }
  };

  let liClass = 'form_item__component list-group-item form-control';
  liClass = props.todo?.completed ? liClass + ' form_item__component-completed' : liClass;

  return (
    <li
      data-testid="form-item-listitem"
      className={liClass}
      onMouseOver={() => updateDisplayMenu(true)}
      onMouseLeave={() => updateDisplayMenu(false)}>
      <div
        className="text-truncate"
        data-testid="form-item-item-completion"
        onClick={() => props.handleCompletedTodo(props.todo)}>
        <div className="form_item__checkout d-inline-block">
          <Checkout isCompleted={props.todo?.completed} />
        </div>
        <span className="form_item__text">{props.todo?.value}</span>
      </div>
      {/* <PropertyBarContainer id={props.todo?.id} /> */}
      {displayMenu ? <PropertyBarContainer id={props.todo?.id} /> : null}
    </li>
  );
};

FormTodo.propTypes = formTodoPropTypes;

export default FormTodo;
