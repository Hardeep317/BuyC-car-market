import { legacy_createStore as createStore } from "redux";
import { loginReducer } from "../Reducers/LoginReducer";
import { productReducer } from "../Reducers/ProductReducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({loginReducer,productReducer})
export const store = createStore(combinedReducer);