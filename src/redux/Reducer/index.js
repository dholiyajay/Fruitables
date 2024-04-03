import { combineReducers } from "redux"
import { facilityReducer } from "./facility.reducer"
import { groceriesReducer } from "./groceries.reducer"

export const rootReducer = combineReducers ({
    fruitFacilities : facilityReducer, 
    groceriesStore : groceriesReducer
})