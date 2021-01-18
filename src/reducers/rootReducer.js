import productsReducer from './productsReducer'

//TODO: use combineReducers

const rootReducer = (state = {}, action) => {
    return {
        products: productsReducer(state.products, action)
    }
}

export default rootReducer;
