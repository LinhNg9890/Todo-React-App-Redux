import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormTodo from '../components/Form/FormTodo';

import { CompletedTodo } from '../actions/CompletedTodo';

const formTodoPropTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleCompletedTodo: PropTypes.func.isRequired,
};

const FormTodoContainer = props => <FormTodo {...props} />;

FormTodoContainer.propTypes = formTodoPropTypes;

const mapDispatchToProps = {
  handleCompletedTodo: CompletedTodo,
};

export default connect(
  null,
  mapDispatchToProps,
)(FormTodoContainer);
