import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormEditTodo from '../components/Form/FormEditTodo';

import { CancelEditTodo } from '../actions/CancelEditTodo';
import { EditTodo } from '../actions/EditTodo';

const formEditTodoPropTypes = {
  todo: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleCancelEditTodo: PropTypes.func.isRequired,
};

const FormEditTodoContainer = props => <FormEditTodo {...props} />;

FormEditTodoContainer.propTypes = formEditTodoPropTypes;

const mapDispatchToProps = {
  handleCancelEditTodo: CancelEditTodo,
  handleEditTodo: EditTodo,
};

export default connect(
  null,
  mapDispatchToProps,
)(FormEditTodoContainer);
