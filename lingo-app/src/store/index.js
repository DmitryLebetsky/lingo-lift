import {legacy_createStore as createStore, combineReducers} from "redux";

import loginManagerReducer from "./loginManagerReducer";
import notificationManagerReducer from "./notificationManagerReducer";
import loadingManagerReducer from "./loadingManagerReducer";
import learningManagerReducer from "./learningManagerReducer";
import studySessionReducer from "./studySessionReducer";

const rootReducer = combineReducers({
    loginManager: loginManagerReducer,
    notificationManager: notificationManagerReducer,
    loadingManager: loadingManagerReducer,
    learningManager: learningManagerReducer,
    studySession: studySessionReducer,
})

export const store =  createStore(rootReducer)

