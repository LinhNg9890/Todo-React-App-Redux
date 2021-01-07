import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import App from '../components/Layout/App';

import { GetTodo } from '../actions/GetTodo';

const appPropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  GetTodo: PropTypes.func.isRequired,
};

const AppContainer = props => {
  const { GetTodo } = props;

  useEffect(() => {
    GetTodo();
  }, [GetTodo]);

  return (<App />);
};

AppContainer.propTypes = appPropTypes;

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  GetTodo: GetTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
