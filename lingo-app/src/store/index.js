import {legacy_createStore as createStore, combineReducers} from "redux";
import loginManagerReducer from "./loginManagerReducer";
import notificationManagerReducer from "./notificationManagerReducer";

const rootReducer = combineReducers({
    loginManager: loginManagerReducer,
    notificationManager: notificationManagerReducer,
})

export const store =  createStore(rootReducer)

