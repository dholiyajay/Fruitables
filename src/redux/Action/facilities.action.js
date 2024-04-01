import { DELETE_DATA, EDIT_DATA, FACILITIES_DATA } from "../ActionType"


export const addfacilities = (data) => (dispatch) => {
    dispatch({type: FACILITIES_DATA, payload: data})
}

export const deleteData = (data) => (dispatch) => {
    dispatch({type: DELETE_DATA, payload: data})
}

export const editData = (data) => (dispatch) => {
    dispatch({type: EDIT_DATA, payload: data})
}