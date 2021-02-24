import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch  } from 'react-redux';
import { getProducts } from '../actions/actions';

// import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { MainPage } from './MainPage';
import { CategoryPage } from './CategoryPage';
import { ItemPage } from './ItemPage';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         justifyContent: "center"
//     }
// }));

function App() {
    // const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts);
    }, [dispatch]);

    const activePage = useSelector( state => state.activePage );

    const pageSelector = () => {
        switch (activePage) {
            case 'loading': return <CircularProgress />;
            case 'mainPage': return <MainPage />;
            case 'categoryPage': return <CategoryPage />;
            case 'itemPage': return <ItemPage />;
            default: return <h1>Error</h1>;
        }
    };

    return pageSelector();

}

export default App;
