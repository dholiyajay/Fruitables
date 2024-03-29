import { combineReducers } from "redux"
import { facilityReducer } from "./facility.reducer"

export const rootReducer = combineReducers ({
    fruitFacilities : facilityReducer 
})