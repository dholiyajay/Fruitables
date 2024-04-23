import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, TOKEN_KEY } from "../../Base/BaseUrl";
import axios from "axios";

const initialState = {
    Copuon: [],
    isLoading: false,
    error: null
};

export const addcoupon2 = createAsyncThunk(
    'copun2/addcoupon',
    async (data) => {
        try {
            const responsev = await axios.post(BASE_URL + "coupon2", data);
            return responsev.data;
        } catch (error) {
            return error.message
        }
    }

)

export const deleteCoupon = createAsyncThunk(
    'coupon/deleteCoupon',
    async (id) => {
        try {
            const response = await axios.delete(BASE_URL + 'coupon2/' + id)
            return id
        } catch (error) {
            console.log(error.message);
            return error.message
        }
    });

export const updateCoupon = createAsyncThunk(
    'coupon/updateCoupon',
    async (data) => {
        try {
            const response = await axios.put(BASE_URL + 'coupon2/' + data.id, data)
            return response.data
        } catch (error) {
            return error.message
        }
    }
)

export const getCoupon2 = createAsyncThunk(
    'copun2/getcoupon',
    async () => {
        try {
            const response = await axios.get(BASE_URL + "coupon2");
            console.log(response.data);
            return response.data;

        } catch (error) {
            return error.message
        }
    }
)

const coupon2Slice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(addcoupon2.fulfilled,
            (state, action) => {
                state.Copuon = state.Copuon.concat(action.payload)
            })
        builder.addCase(getCoupon2.fulfilled,
            (state, action) => {
                state.Copuon = action.payload
            })
        builder.addCase(deleteCoupon.fulfilled, (state, action) => {

            console.log(action.payload);

            state.isLoading = false
            state.Copuon = state.Copuon.filter((v) => v.id !== action.payload)
        })
        builder.addCase(updateCoupon.fulfilled, (state, action) => {

            state.isLoading = false
            state.Copuon = state.Copuon.map((v) => {

                if (v.id === action.payload.id) {
                    return action.payload
                } else {
                    return v
                }
            })
        })


    }
})





export default coupon2Slice.reducer;
