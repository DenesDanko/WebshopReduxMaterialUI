
const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'POPULATE_PRODUCTS':
            console.log('POPULATE_PRODUCTS, products are here!');
            return action.payload;

        default:
            return state;
    }
};

export default productsReducer;
