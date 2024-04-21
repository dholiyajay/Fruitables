import { combineReducers } from "redux";
import { facilitesReducer } from "./Reducer/facilities.reducer";
import { organicReducer } from "./Reducer/organic.reducer";
import { reviewReducer } from "./Reducer/review.reducer";
import  cartslice  from "./slice/crat.slice";
import CountSlice from "./Count.slice";
import couponSlice from "./slice/couponSlice";

export const rootReducer = combineReducers({
    addFacilities: facilitesReducer,
    OrganicProducts: organicReducer,
    Review: reviewReducer,
    AddtoCart: cartslice,
    Counter: CountSlice,
    couponInCart: couponSlice
})