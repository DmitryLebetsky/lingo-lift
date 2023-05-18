const defaultState = {
    currentWord: {
        word: '',
        translation: '',
    },
}

const CHANGE_CURRENT_WORD = "CHANGE_CURRENT_WORD";

const studySessionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_WORD:
            return {
                ...state, currentWord: {
                    word: action.payload.word,
                    translation: action.payload.translation,
                }
            }
        default:
            return state;
    }
}

export const changeCurrentWordAction = (payload) => ({ type: CHANGE_CURRENT_WORD, payload: payload });
export default studySessionReducer;