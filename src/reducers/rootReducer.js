import AppReducer from './AppReducer';
import productsReducer from './productsReducer';
import productsByIDReducer from './productsByIDReducer';
import activePageReducer from './activePageReducer';
import selectedProductReducer from './selectedProductReducer';

//TODO: use combineReducers

const initWebshop = {
    products: {},
    productsByID: {},
    activePage: 'loadingPage',
    category: null,
    selectedProductID: null
};

const rootReducer = (state = initWebshop, action) => {
    return {
        products: productsReducer(state.products, action),
        productsByID: productsByIDReducer(state.productsByID, action),
        activePage: activePageReducer(state.activePage, action),
        category: AppReducer(state.category, action),
        selectedProductID: selectedProductReducer(state.selectedProductID, action)
    };
}

export default rootReducer;
