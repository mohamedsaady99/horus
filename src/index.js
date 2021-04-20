import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import './i18n';
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback="loading..." >
      <App />
    </Suspense >
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
