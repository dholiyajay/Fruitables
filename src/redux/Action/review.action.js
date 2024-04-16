import { BASE_URL } from "../../Base/BaseUrl";
import { DELETE_REVIEW, EDITE_REVIEW, GET_DATA, GET_REVIEW } from "../ActionType";
import axios from "axios";
import { isLodingOrganic } from "./organic.action";



export const addReviews = (data) => async (dispatch) => {
    console.log(addReviews);

    try {
        await axios
            .post("http://localhost:8000/review", data)
            .then((response) => {
                console.log(response.data);
                dispatch({ type: GET_DATA, payload: response.data })

            })
            .catch((error) => {
                console.log(error);
            })

    } catch (error) {

    }

}

export const Reviews = () => async (dispatch) => {

    try {
        await axios
            .get("http://localhost:8000/review")
            .then((response) => {
                console.log(response);
                dispatch({ type: GET_REVIEW, payload: response.data })

            })
            .catch((error) => {
                console.log(error);
            })

    } catch (error) {

    }

}

export const deletereview = (id) => (dispatch) => {
    dispatch(isLodingOrganic())
    try {
        axios
            .delete(BASE_URL + 'review/' + id)
            .then(res => {
                console.log(res);
                console.log(res.data);
                dispatch({ type: DELETE_REVIEW, payload: id });

            })
            .catch((error) => {
                console.log(error);
            })

    } catch (error) {
        console.log(error);
    }
   
}

export const editreview = (data) => (dispatch) => {

    dispatch(isLodingOrganic())

    try {
        axios
            .put(BASE_URL + 'review/' + data.id, data)
            .then(res => {
                console.log(res);
                console.log(res.data);
                dispatch({ type: EDITE_REVIEW, payload: data });
            })
            .catch((error) => {
                console.log(error);
            })

    } catch (error) {
        console.log(error);
    }

   
}

