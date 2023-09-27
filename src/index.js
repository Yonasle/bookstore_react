import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom'; // Import createRoot
import store from './redux/store';
import App from './App';

const root = createRoot(document.getElementById('root')); // Use createRoot

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
