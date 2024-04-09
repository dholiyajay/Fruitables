import { combineReducers } from "redux";
import { facilitesReducer } from "./Reducer/facilities.reducer";
import { organicReducer } from "./Reducer/organic.reducer";
import { reviewReducer } from "./Reducer/Shopdetail.reducer";

export const rootReducer = combineReducers({
    addFacilities : facilitesReducer,
    OrganicProducts : organicReducer,
    Review : reviewReducer 
})