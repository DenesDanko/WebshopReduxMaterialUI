import productsReducer from './productsReducer'

const rootReducer = (state = {}, action) => {
    return {
        products: productsReducer(state.products, action)
    }
}

export default rootReducer;
