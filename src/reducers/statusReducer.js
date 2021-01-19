const statusReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            console.log('GET_PRODUCTS, start fetching products');
            return { loading: true, error: '' };

        case 'POPULATE_PRODUCTS':
                return { loading: false, error: '' };

        case 'FETCH_FAILED':
            console.log('FETCH_FAILED! Damn, fetch failed!');
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export default statusReducer;