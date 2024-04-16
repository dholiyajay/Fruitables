// import { GET_DATA, GET_REVIEW } from "../Action.type";

import { GET_DATA, GET_REVIEW,DELETE_REVIEW,EDITE_REVIEW } from "../ActionType";

const intialState = {
    isloding: false,
    Review: [],
    error: null,

}

export const reviewReducer = (state = intialState, action) => {

    console.log(action);

    switch (action.type) {

        case GET_DATA:
            return {
                isloding: false,
                Review: state.Review.concat(action.payload),
                error: null,
            }
        case GET_REVIEW:
            return {
                isloding: false,
                Review: action.payload,
                error: null,
            }
        case DELETE_REVIEW:
            return{
                ...state,
                Review :state.Review.filter((item)=>item.id!==action.payload)

            }

        case EDITE_REVIEW:
            return{
                ...state,
                Review :state.Review.map((item)=>item.id===action.payload.id?action.payload:item)
            }
    
        default:
            return state
    }
}