const defaultState = {
    isLoading: false,
}

const CHANGE_LOADING_STATUS = "CHANGE_LOGGED_STATUS";

const loadingManagerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LOADING_STATUS:
            return { ...state, isLoading: action.payload }
        default:
            return state;
    }
}

export const changeLoadingStatusAction = (payload) => ({type: CHANGE_LOADING_STATUS, payload: payload}); 
export default loadingManagerReducer;