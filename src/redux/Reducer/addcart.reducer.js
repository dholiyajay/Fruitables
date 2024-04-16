import { ADD_CARAT } from "../ActionType";

// reducers/cartReducer.js
const initialState = {
    isLoding: false,
    error: null,
    cartItems: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARAT:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
        default:
            return state;
    }
};

export default state ;
