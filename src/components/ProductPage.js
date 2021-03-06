import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

export const ProductPage = () => {
    const selectedProduct = useSelector( state => state.productsByID[state.selectedProductID] );

    return  <Product
                image={ selectedProduct.image }
                title={ selectedProduct.title }
                description={ selectedProduct.description }
                price={ selectedProduct.price }
                category={ selectedProduct.category }
            />
};
