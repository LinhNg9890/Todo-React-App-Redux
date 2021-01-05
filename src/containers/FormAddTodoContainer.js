import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormAddTodo from '../components/Form/FormAddTodo';

import { AddTodo } from '../actions/AddTodo';

const formAddTodoPropTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

const FormAddTodoContainer = props => <FormAddTodo {...props} />;

FormAddTodoContainer.propTypes = formAddTodoPropTypes;

const mapDispatchToProps = {
    handleAddTodo: AddTodo,
};

export default connect(
  null,
  mapDispatchToProps,
)(FormAddTodoContainer);
