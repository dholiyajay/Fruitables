const initialState = {
    facility: [],
    isLoading: false,
    error: null
}

export const facilityReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case "FACILITIES_DATA":
            return {
                ...state,
                facility: state.facility.concat(action.payload)
            }
        default:
            return state
    }

}
