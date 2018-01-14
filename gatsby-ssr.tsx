import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import { store } from './src/store';

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <Provider store={store}>
      {bodyComponent}
    </Provider>
  );
  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};
