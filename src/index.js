import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import store from './store';

const fetchTodos = async (dispatch, getState) => {
    dispatch({ type: 'GET_PRODUCTS' });
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        dispatch({ type: 'POPULATE_PRODUCTS', payload: products });
    } catch {
        //dispath
    }
};

store.dispatch(fetchTodos);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
