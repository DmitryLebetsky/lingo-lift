import {legacy_createStore as createStore, combineReducers} from "redux";

import loginManagerReducer from "./loginManagerReducer";
import notificationManagerReducer from "./notificationManagerReducer";
import loadingManagerReducer from "./loadingManagerReducer";

const rootReducer = combineReducers({
    loginManager: loginManagerReducer,
    notificationManager: notificationManagerReducer,
    loadingManager: loadingManagerReducer,
})

export const store =  createStore(rootReducer)

