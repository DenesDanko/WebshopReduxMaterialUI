import productsReducer from './productsReducer';
import statusReducer from './statusReducer';

//TODO: use combineReducers

const webshop = {
    products:{},
    status:{
        loading: true,
        error: ''
    }
};

const rootReducer = (state = webshop, action) => {
    const newState = {
        products: productsReducer(state.products, action),
        status: statusReducer(state.status, action)
    };
    return newState;
}

export default rootReducer;
