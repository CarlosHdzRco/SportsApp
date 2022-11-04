import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import './css/index.css'
// require('dotenv').config()

import {createStore} from 'redux'
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer'


const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);