const statusReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            console.log('GET_PRODUCTS, start fetching products');
            return { ...state, loading: true };

        case 'FETCH_FAILED':
            console.log('FETCH_FAILED! Damn, fetch failed!');
            return { ...state, error: action.payload };

        default:
            return state;
    }
};

export default statusReducer;