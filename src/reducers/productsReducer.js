
const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'POPULATE_PRODUCTS':
            console.log('POPULATE_PRODUCTS, products are here!');
            return action.payload;

        case 'GET_PRODUCTS':
            console.log('GET_PRODUCTS, FROM PRODUCT REDUCER!!');
            return state;

        // // Can return just the new todos array - no extra object around it
        // return [
        //   ...state,
        //   {
        //     id: nextTodoId(state),
        //     text: action.payload,
        //     completed: false
        //   }
        // ]
        default:
            return state;
    }
};

export default productsReducer;
