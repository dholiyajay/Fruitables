import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartD: []
}

export const cartslice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addItem: (state, action) => {
            const existingItemIndex = state.cartD.findIndex(item => item.pid === action.payload.id);

            if (existingItemIndex !== -1) {
                state.cartD[existingItemIndex].count += action.payload.que;
            } else {
                state.cartD.push({ pid: action.payload.id, count: action.payload.que });
            }
        },
        decremnet: (state, action) => {
            const index = state.cartD.findIndex(item => item.pid === action.payload);
            if (state.cartD[index].count > 1) {
                state.cartD[index].count--;
            }
        },
        increament: (state, action) => {
            const index = state.cartD.findIndex(item => item.pid === action.payload);
            state.cartD[index].count++;
        },
        removecrat: (state, action) => {
            const index = state.cartD.findIndex(item => item.pid === action.payload);
            state.cartD.splice(index, 1);
        }
    }
});

export const { addItem, increament, decremnet, removecrat } = cartslice.actions;
export default cartslice.reducer;
