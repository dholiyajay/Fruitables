import { GET_DATA, GET_REVIEW } from "../ActionType";
import axios from "axios";



export const addReviews = (data) => async (dispatch) => {

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