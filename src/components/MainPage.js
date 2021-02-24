import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import GenericCard from './GenericCard';
import { setCategory, setActivePage } from '../actions/AppActions';

export const MainPage = () => {

    const products = useSelector( state => state.products );
    const dispatch = useDispatch();

    const handleOnClick = (categoryName) => {
        dispatch(setCategory(categoryName));
        dispatch(setActivePage('categoryPage'));
    };

    return Object.keys(products).map( category => {
        return <GenericCard
            key = { category }
            url = { products[category][0].image }
            name = { category }
            category = { category }
            onClick = { handleOnClick }
        />
    })
};
