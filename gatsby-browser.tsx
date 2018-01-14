import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { store } from './src/store';

exports.replaceRouterComponent = ({ history }) =>
  ({ children }) =>
    <Provider store={store} >
      <Router history={history}>{children}</Router>
    </Provider>;
