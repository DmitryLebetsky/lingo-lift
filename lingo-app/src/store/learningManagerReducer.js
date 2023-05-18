const defaultState = {
    isLearningInProcess: false,
}

const CHANGE_LEARNING_STATUS = "CHANGE_LEARNING_STATUS";

const learningManagerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LEARNING_STATUS:
            return { ...state, isLearningInProcess: action.payload }
        default:
            return state;
    }
}

export const changeLearningStatusAction = (payload) => ({type: CHANGE_LEARNING_STATUS, payload: payload}); 
export default learningManagerReducer;