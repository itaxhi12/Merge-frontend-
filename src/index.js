import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SnackbarProvider from 'react-simple-snackbar'
import {Provider} from 'react-redux'
import {store} from './redux/global'
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <SnackbarProvider>
    <App />
    </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


