import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import App from '../components/Layout/App';

import { LoadStateLocalStorage } from '../actions/LoadStateLocalStorage';
import { SaveStateLocalStorage } from '../actions/SaveStateLocalStorage';

const appPropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  handleLoadStateLocalStorage: PropTypes.func.isRequired,
  handleSaveStateLocalStorage: PropTypes.func.isRequired,
};

const AppContainer = props => {
  const { handleLoadStateLocalStorage, handleSaveStateLocalStorage, todos } = props;
  const [isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false);
  const previousTodosLength = useRef(null);

  useEffect(() => {
    handleLoadStateLocalStorage();
    setIsLocalStorageLoaded(true);
  }, [handleLoadStateLocalStorage]);

  useEffect(() => {
    if (isLocalStorageLoaded) {
      if (!previousTodosLength.current) {
        previousTodosLength.current = -1;
        return;
      }

      if (todos.length !== previousTodosLength.current) {
        handleSaveStateLocalStorage(todos);
        if (todos.length === 0) {
            previousTodosLength.current = -1;
        } else {
            previousTodosLength.current = todos.length;
        }
      }
    }
  }, [handleSaveStateLocalStorage, todos, isLocalStorageLoaded]);

  return (<App />);
};

AppContainer.propTypes = appPropTypes;

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  handleLoadStateLocalStorage: LoadStateLocalStorage,
  handleSaveStateLocalStorage: SaveStateLocalStorage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
