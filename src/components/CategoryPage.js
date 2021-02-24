import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import Button from '@material-ui/core/Button';
import GenericCard from './GenericCard';
import { setActivePage, setSelectedProductID } from '../actions/AppActions';

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
    }
));

export const CategoryPage = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const categoryHeading = useSelector( state => state.category );
    const categoryItems = useSelector( state => state.products[state.category])

    const handleItemOnClick = (categoryName, id) => {
        dispatch(setSelectedProductID(id));
        dispatch(setActivePage('productPage'));
    };

    return  (<>
                <Button
                    variant='contained'
                    color="primary"
                    onClick={ () => dispatch(setActivePage('mainPage')) }
                >BACK</Button>
                <h1 className={classes.h1}>{ categoryHeading }</h1>
                <div className={classes.root}>
                    { categoryItems.map( (item) => {
                        return (
                            <GenericCard
                                id={ item.id }
                                key={ item.id }
                                url = { item.image }
                                name = { item.title }
                                category = { item.category }
                                onClick = { handleItemOnClick }
                            />)
                        })
                    }
                </div>
            </>)
};
