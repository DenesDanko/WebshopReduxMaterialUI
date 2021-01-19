import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import store from './store';

const fetchProducts = (dispatch, getState) => {
    console.log(getState());
    dispatch({ type: 'GET_PRODUCTS' });
    console.log(getState());
    dispatch({ type: 'FETCH_FAILED', payload: 'Bye bye Nyuszipuszi!' });
    console.log(getState());
    // fetch('https://fakestoreapi.com/product')
    //     .then(response => response.json())
    //     .then(products => dispatch({ type: 'POPULATE_PRODUCTS', payload: products }))
    //     .catch(error => dispatch({ type: 'FETCH_FAILED', payload: error.message }));
    // try {
    //     const response = await fetch('https://fakestoreapi.com/products');
    //     const products = await response.json();
    //     dispatch({ type: 'POPULATE_PRODUCTS', payload: products });
    // } catch {
    //     dispatch({ type: 'FETCH_FAILED', payload: error.message })
    // }
};

store.dispatch(fetchProducts);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
