import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// REDUX
import store from './store/store'
import { Provider } from 'react-redux'

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


