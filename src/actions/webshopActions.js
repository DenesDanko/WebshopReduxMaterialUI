export const getProducts  = async (dispatch, getState) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        dispatch({ type: 'POPULATE_PRODUCTS', payload: products });
    } catch (error) {
        dispatch({ type: 'FETCH_FAILED', payload: error.message });
    }
};