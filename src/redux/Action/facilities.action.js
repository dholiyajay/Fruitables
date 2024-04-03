import { DELETE_DATA, EDIT_DATA, FACILITIES_DATA, LOADING_FACILITY, START_LOADING, STOP_LOADING } from "../ActionType"

const handleLoading = () => (dispatch) => {
  dispatch({ type: LOADING_FACILITY })
}

export const addfacilities = (data) => (dispatch) => {
  dispatch(handleLoading())

  setTimeout(() => {
    dispatch({ type: FACILITIES_DATA, payload: data })
  }, 2000)
}

export const deleteData = (data) => (dispatch) => {
  dispatch({ type: DELETE_DATA, payload: data })
}

export const editData = (data) => (dispatch) => {
  dispatch({ type: EDIT_DATA, payload: data })
}

// export const handleLoading = (isLoading) => (dispatch) => {
//     dispatch({type: LOADING_DATA, payload: isLoading})
// }

// actions.js
// export const startLoading = () => ({
//   type: START_LOADING,
// });

// export const stopLoading = () => ({
//   type: STOP_LOADING,
// });
