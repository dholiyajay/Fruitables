
import axios from 'axios';
import { BASE_URL } from '../../utilities/Utilities';

export const addProducts = (data) => (dispatch) => {
    try {
        axios.get(BASE_URL + 'products')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
}

addProducts()