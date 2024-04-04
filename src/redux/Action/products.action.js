
import axios from 'axios';
import { BASE_URL } from '../../utilities/Utilities';
import { GET_PRODUCTS } from '../ActionType';

export const fetchProducts = (data) => (dispatch) => {
    try {
        axios.get(BASE_URL + 'products')
            .then((response) => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
}

fetchProducts()