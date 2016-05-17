import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { rootReducer } from './reducers';
import React from 'react';
import routes from './routes';
import thunkMiddleware from 'redux-thunk';

const store = applyMiddleware(thunkMiddleware)(createStore)(rootReducer);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
