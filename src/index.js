import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import store from './store'

const fetchTodos = async (dispatch, getState) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        dispatch({ type: 'GET_PRODUCTS', payload: data });
    } catch {
        //dispath
    }
};

store.dispatch(fetchTodos)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
