import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartDATA: []
}

export const cartslice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addItem: (state, action) => {
            console.log(action);

            let pAve = state.cartDATA.some((item) => item.pid === action.payload)

            if (pAve) {
                let index = state.cartDATA.findIndex((item) => item.pid === action.payload)
                state.cartDATA[index].qut++
            } else {
                state.cartDATA.push({
                    pid: action.payload,
                    qut: 1
                })
            }



        }
    }
});

export const { addItem } = cartslice.actions
export default cartslice.reducer