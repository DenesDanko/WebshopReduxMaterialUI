
const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS': {
            console.log(action.payload);
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
        }
        default:
            return state;
    }
};

export default productsReducer;
