import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AppReducer from './reducers';
import rootSaga from "./reducers/TodoSagas";
import createSagaMiddleware from 'redux-saga';
import reportWebVitals from './reportWebVitals';

// Third-party declarations.
import 'bootswatch/dist/flatly/bootstrap.min.css';

// Application-wide CSS definitions.
import './stylesheets/index.css';
import './stylesheets/animations.css';

import AppContainer from './containers/AppContainer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  AppReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
