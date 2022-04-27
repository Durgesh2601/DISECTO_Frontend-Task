import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer } from "./reducer";

export const reducers = combineReducers({
    allProducts : productsReducer,
    specificProduct : selectedProductReducer
});