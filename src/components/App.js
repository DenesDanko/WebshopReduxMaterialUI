import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch  } from 'react-redux';
import { getProducts } from '../actions/actions';

import { AppHeader } from './AppHeader'
import { LoadingPage } from './LoadingPage';
import { MainPage } from './MainPage';
import { CategoryPage } from './CategoryPage';
import { ProductPage } from './ProductPage';
import { SearchOverlay } from './SearchOverlay';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts);
    }, [dispatch]);

    const activePage = useSelector( state => state.activePage );

    const pageSelector = () => {
        switch (activePage) {
            case 'loadingPage': return <LoadingPage />;
            case 'mainPage': return <MainPage />;
            case 'categoryPage': return <CategoryPage />;
            case 'productPage': return <ProductPage />;
            default: return <h1>Error</h1>;
        }
    };

    return  (<>
                <AppHeader />
                <SearchOverlay />
                { pageSelector() }
            </>);
}

export default App;
