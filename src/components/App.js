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
import CartDrawer from './CartDrawer';

function App() {
    const dispatch = useDispatch();
    const [cartOpen, setCartOpen] = React.useState(false);

    const handleCartClick = () =>{
        setCartOpen(cartOpen => !cartOpen);
    }

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
                <AppHeader toggleCart={ handleCartClick }/>
                <CartDrawer open={ cartOpen }/>
                <SearchOverlay />
                { pageSelector() }
            </>);
}

export default App;
