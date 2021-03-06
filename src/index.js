import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

import './index.css';
import App from './App';
import airApp from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { watch } from 'fs';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);
const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <Provider store={createStoreWithMiddleWare(airApp)}>
      <App />
    </Provider>
  </AppContainer>,
  rootEl
);
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={createStoreWithMiddleWare(airApp)}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootEl
    );
   });
}
registerServiceWorker();
