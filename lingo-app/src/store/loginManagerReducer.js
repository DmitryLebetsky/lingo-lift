import loginManager from "../entities/loginManager";

const defaultState = {
    isLogged: loginManager.isAuthorized,
}

const CHANGE_LOGGED_STATUS = "CHANGE_LOGGED_STATUS";

const loginManagerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LOGGED_STATUS:
            return { ...state, isLogged: action.payload }
        default:
            return state;
    }
}

export const changeLoggedStatusAction = (payload) => ({type: CHANGE_LOGGED_STATUS, payload: payload}); 
export default loginManagerReducer;