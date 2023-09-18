import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import App from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Global styles={GlobalStyles} />
    <App />
  </Provider>
);
