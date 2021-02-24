import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import Button from '@material-ui/core/Button';
import GenericCard from './GenericCard';
import { setActivePage, setSelectedProductID } from '../actions/AppActions';

export const CategoryPage = () => {
    const dispatch = useDispatch();
    const categoryItems = useSelector( state => state.products[state.category])

    const handleItemOnClick = (categoryName, id) => {
        dispatch(setActivePage('itemPage'));
        dispatch(setSelectedProductID(id));
    };

    return  (<>
                <Button variant="contained" onClick={ () => dispatch(setActivePage('mainPage')) } color="primary">BACK</Button>
                {   categoryItems.map( item => {
                        return <GenericCard
                            key = { item.id }
                            id = { item.id }
                            url = { item.image }
                            name = { item.title }
                            category = { item.category }
                            onClick = { handleItemOnClick }
                        />
                    })
                }
            </>)
};
