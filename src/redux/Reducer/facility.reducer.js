import { DELETE_DATA, EDIT_DATA, FACILITIES_DATA } from "../ActionType";

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
            const editFacility = state.facility.map((facility) => {
                if (facility.id === action.payload.id) {
                    return action.payload;
                } else {
                    return facility;
                }
            });
            return {
                ...state,
                facility: editFacility
            };
        default:
            return state
    }

}
