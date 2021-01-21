const statusReducer = (state = {}, action) => {
    switch (action.type) {
        case 'POPULATE_PRODUCTS':
                return { ...state, loading: false, error: '' };

        case 'FETCH_FAILED':
            console.log('FETCH_FAILED! Damn, fetch failed!');
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default statusReducer;