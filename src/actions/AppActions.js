export const setCategory = (categoryName) => {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_CATEGORY', payload: categoryName });
    }
};
