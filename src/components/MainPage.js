import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import GenericCard from './GenericCard';
import { setCategory, setActivePage } from '../actions/AppActions';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        h1: {
            textTransform: 'capitalize',
            textAlign: 'center',
            fontWeight: '400',
            fontSize: '40px',
            color: '#8d8881'
        }
    })
);

export const MainPage = () => {
    const classes = useStyles();
    const products = useSelector( state => state.products );
    const dispatch = useDispatch();

    const handleOnClick = (categoryName) => {
        dispatch(setCategory(categoryName));
        dispatch(setActivePage('categoryPage'));
    };

    return (<>
                <h1 className={classes.h1}>Categories</h1>
                <div className={classes.root}>
                    {   Object.keys(products).map( category => {
                            return <GenericCard
                                key = { category }
                                url = { products[category][0].image }
                                name = { category }
                                category = { category }
                                onClick = { handleOnClick }
                                />
                        })
                    }
                </div>
            </>)
};
