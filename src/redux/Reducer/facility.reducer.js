import { DELETE_DATA, EDIT_DATA, FACILITIES_DATA, LOADING_DATA, START_LOADING, STOP_LOADING } from "../ActionType";

const initialState = {
    facility: [],
    isLoading: false,
    error: null
}

export const facilityReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case FACILITIES_DATA:
            return {
                ...state,
                facility: state.facility.concat(action.payload)
            }
        case DELETE_DATA:
            return {
                ...state,
                facility: state.facility.filter((item) => item.id !== action.payload)
            }
        case EDIT_DATA:
            return {
                ...state,
                facility: state.facility.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    }
                })
            };
        // case LOADING_DATA:
        //     return {
        //         ...state,
        //         isLoading: action.payload
        //     }

        case START_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case STOP_LOADING:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state
    }

}
