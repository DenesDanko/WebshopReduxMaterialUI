import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import Button from '@material-ui/core/Button';
import { setActivePage } from '../actions/AppActions';
import Product from './Product';

export const ItemPage = () => {
    const dispatch = useDispatch();
    const selectedProduct = useSelector( state => state.productsByID[state.selectedProductID] );

    return (<>
        <Button variant="contained" onClick={ () => dispatch(setActivePage('categoryPage')) } color="primary">BACK</Button>
        <div>
            <Product
                image={ selectedProduct.image }
                title={ selectedProduct.title }
                description={ selectedProduct.description }
                price={ selectedProduct.price }
                category={ selectedProduct.category }
            />
        </div>
    </>)
};
