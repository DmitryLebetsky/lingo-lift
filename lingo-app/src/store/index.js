import {legacy_createStore as createStore, combineReducers} from "redux";
import loginManagerReducer from "./loginManagerReducer";

const rootReducer = combineReducers({
    loginManager: loginManagerReducer,
})

export const store =  createStore(rootReducer)

