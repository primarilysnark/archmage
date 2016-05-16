import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import React from 'react';
import routes from './routes';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
