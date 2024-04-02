import { DELETE_DATA, EDIT_DATA, FACILITIES_DATA, LOADING_DATA, START_LOADING, STOP_LOADING } from "../ActionType"


export const addfacilities = (data) => (dispatch) => {
    dispatch({type: FACILITIES_DATA, payload: data})
}

export const deleteData = (data) => (dispatch) => {
    dispatch({type: DELETE_DATA, payload: data})
}

export const editData = (data) => (dispatch) => {
    dispatch({type: EDIT_DATA, payload: data})
}

// export const handleLoading = (isLoading) => (dispatch) => {
//     dispatch({type: LOADING_DATA, payload: isLoading})
// } 

// actions.js
export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});
