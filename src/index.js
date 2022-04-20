import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducerFn from './reducer/reducer';

const store = createStore(reducerFn)

ReactDOM.render(
  <Provider store={store}>
    <App>

    </App>
  </Provider>,
  document.getElementById('root')
); 