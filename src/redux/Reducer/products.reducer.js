import { GET_PRODUCTS, REMOVE_PRODUCT } from "../ActionType";

const initialState = {
    products: [],
    isLoading: false,
    error: null
}

export const productsReducer = (state = initialState, action) => {
    console.log(action, "reducer");

    console.log(state, "reducer");

    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((item) => item.id !== action.payload)
            }
        default:
            return state
    }
}