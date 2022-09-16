import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Import provider
import { Provider } from 'react-redux';
//Import store from src/index
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
