import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import store from './store';

const fetchProducts = async (dispatch, getState) => {
    console.log(getState());
    dispatch({ type: 'GET_PRODUCTS' });
    console.log(getState());
    // fetch('https://fakestoreapi.com/product')
    //     .then(response => response.json())
    //     .then(products => dispatch({ type: 'POPULATE_PRODUCTS', payload: products }))
    //     .catch(error => dispatch({ type: 'FETCH_FAILED', payload: error.message }));
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        dispatch({ type: 'POPULATE_PRODUCTS', payload: products });
        console.log(getState());
    } catch (error) {
        dispatch({ type: 'FETCH_FAILED', payload: error.message });
        console.log(getState());
    }
};

store.dispatch(fetchProducts);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
