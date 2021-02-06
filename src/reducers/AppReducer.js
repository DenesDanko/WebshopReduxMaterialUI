import { SET_CATEGORY } from '../constants';

const AppReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return action.payload;

        default:
            return state;
    }
};

export default AppReducer;
