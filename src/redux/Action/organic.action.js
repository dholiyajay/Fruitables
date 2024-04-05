import axios from "axios";
import {  ADD_PRODUCTS, DELETE_PRODUCTS,  EDITE_PRODUCTS, IS_LODING } from "../ActionType"
import { BASE_URL } from "../../Base/BaseUrl";

export const getOrganic = () => (dispatch) => {

    dispatch(isLodingOrganic())

    try {
        axios.get(BASE_URL + 'groceries')
            .then(res => {
                console.log(res);
                console.log(res.data);
                dispatch({ type: ADD_PRODUCTS, payload: res.data })
            })
            .catch((error) => {
                console.log(error);
            })

    } catch (error) {
        console.log(error);
    }
}

export const addOrganic = (odata) => (dispatch) => {
    dispatch(isLodingOrganic())
    try {
        axios.post(BASE_URL + 'groceries', odata)
            .then(res => {
                console.log(res);
                console.log(res.data);
                dispatch({ type: ADD_PRODUCTS, payload: odata })
            })
            .catch((error) => {
                console.log(error);
            })

    } catch (error) {
        console.log(error);
    }



}

export const editOrganic = (data) => (dispatch) => {

    dispatch(isLodingOrganic())

    try {
        axios
            .put(BASE_URL + 'groceries/' + data.id, data)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })

    } catch (error) {
        console.log(error);
    }

    dispatch({ type: EDITE_PRODUCTS, payload: data });
}

export const deleteOrganic = (id) => (dispatch) => {
    dispatch(isLodingOrganic())
    try {
        axios
            .delete(BASE_URL + 'groceries/' + id)
            .then(res => {
                console.log(res);
                console.log(res.data);

            })
            .catch((error) => {
                console.log(error);
            })

    } catch (error) {
        console.log(error);
    }
    dispatch({ type: DELETE_PRODUCTS, payload: id });
}

export const isLodingOrganic = () => (dispatch) => {
    dispatch({ type: IS_LODING })
}