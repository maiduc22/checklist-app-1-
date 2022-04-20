import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App></App>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
); 