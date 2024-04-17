import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartD: []
}

export const cartslice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addItem: (state, action) => {
            console.log(action);

            let pAve = state.cartD.some((item) => item.pid === action.payload)

            if (pAve) {
                let index = state.cartD.findIndex((item) => item.pid === action.payload)
                state.cartD[index].qut++
            } else {
                state.cartD.push({
                    pid: action.payload,
                    qut: 1
                })
            }



        }
    }
});

export const { addItem } = cartslice.actions
export default cartslice.reducer