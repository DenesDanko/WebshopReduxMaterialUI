import productsReducer from './productsReducer';
import statusReducer from './statusReducer';

//TODO: use combineReducers

const webshop = {
    products:{},
    status:{
        alma: 3,
        loading: false,
        error: ''
    }
};

const rootReducer = (state = webshop, action) => {
    return {
        products: productsReducer(state.products, action),
        status: statusReducer(state.status, action)
    };
}

export default rootReducer;
