import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
    amount: amountReducer,
    addedCart: cartReducer
});

export default reducers;