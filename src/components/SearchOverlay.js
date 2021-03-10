import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { setSearchTerm, setActivePage, setSelectedProductID } from '../actions/AppActions';
import GenericCard from './GenericCard';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    overlay: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        textAlign: 'right',
        backgroundColor: '#dadada',
        zIndex: 1500,
        color: '#fff',
        marginTop: '64px'
    },
    hideOverlay: {
        display: 'none'
    },
    clear: {
        padding: '16px',
    },
    searchResults: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
}));

export const SearchOverlay = () => {
    const classes = useStyles();
    const searchTerm = useSelector( state => state.searchTerm );
    const dispatch = useDispatch();

    const searchResult = useSelector( state =>
            searchTerm.length > 2 && Object.values(state.productsByID).filter( product => {
                return  product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.category.toLowerCase().includes(searchTerm.toLowerCase());
            }
        ));

    return (<div className={`${classes.overlay} ${searchTerm || classes.hideOverlay}`}>
                <Typography className={classes.clear} noWrap onClick={() => dispatch(setSearchTerm(''))}>
                    CLEAR SEARCH FIELD
                </Typography>
                <div className={ classes.searchResults }>
                    { searchResult &&
                        searchResult.map( (item) => {
                            return (
                                <GenericCard
                                    id={ item.id }
                                    key={ item.id }
                                    url = { item.image }
                                    name = { item.title }
                                    category = { item.category }
                                    onClick = { () => {
                                            dispatch(setSearchTerm(''));
                                            dispatch(setSelectedProductID(item.id));
                                            dispatch(setActivePage('productPage'));
                                        }
                                    }
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
};
