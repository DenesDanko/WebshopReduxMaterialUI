import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import store from './store';

const getProducts  = async (dispatch, getState) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        dispatch({ type: 'POPULATE_PRODUCTS', payload: products });
    } catch (error) {
        dispatch({ type: 'FETCH_FAILED', payload: error.message });
    }
};

store.dispatch(getProducts);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
