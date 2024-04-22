import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TOKEN_KEY } from "../../Base/BaseUrl";

const initialState = {
    coupon: [],
    isLoading: false,
    error: null
};

export const couponSlice = createSlice({
    name: "coupon",
    initialState: initialState,
    reducers: {
        getCouponfirst: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        getCouponright: (state, action) => {
            state.coupon = action.payload;
            state.isLoading = false;
        },
        getCoupongo: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        addCouponlast: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        addCouponuser: (state, action) => {
            state.coupon = action.payload;
            state.isLoading = false;
        },
        addCouponlay: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        removeCouponuser: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        removeCoupongo: (state, action) => {
            state.coupon = state.coupon.filter((item) => item.id !== action.payload);
            state.isLoading = false;
        },
        removeCouponfinal: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        updateCoupongo: (state) => {
            state.isLoading = true;
        },
        updateCouponlast: (state, action) => {
            state.coupon = state.coupon.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                } else {
                    return item;
                }
            });
            state.isLoading = false;
        },
        updateCouponjio: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    },

});

export const { getCouponfirst, getCouponright, getCoupongo, addCouponlast, addCouponuser, addCouponlay, removeCouponuser, removeCoupongo, removeCouponfinal, updateCoupongo, updateCouponlast, updateCouponjio } = couponSlice.actions;

export const getCoupon = () => async (dispatch) => {
    dispatch(getCouponfirst());
    try {
        const response = await axios.get(TOKEN_KEY + "couponCode");
        dispatch(getCouponright(response.data));
    } catch (error) {
        dispatch(getCoupongo(error.message));
    }
};

export const addCoupon = (couponData) => async (dispatch) => {
    dispatch(addCouponlast());
    try {
        const response = await axios.post(TOKEN_KEY + "couponCode", couponData);
        dispatch(addCouponuser(response.data));
    } catch (error) {
        dispatch(addCouponlay(error.message));
    }
};

export const removeCoupon = (id) => async (dispatch) => {
    dispatch(removeCouponuser());
    try {
        await axios.delete(`http://localhost:8000/couponCode/${id}`);
        dispatch(removeCoupongo(id));
    } catch (error) {
        dispatch(removeCouponfinal(error.message));
    }
}

export const updateCoupon = (id, couponData) => async (dispatch) => {
    dispatch(updateCoupongo());
    try {
        const response = await axios.put(`http://localhost:8000/couponCode/${id}`, couponData);
        dispatch(updateCouponlast(response.data));
    } catch (error) {
        dispatch(updateCouponjio(error.message));
    }
};

export default couponSlice.reducer;