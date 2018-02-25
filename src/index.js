import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './assets/_bootstrap/bootstrap.css';

import store from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
