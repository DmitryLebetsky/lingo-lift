const defaultState = {
    open: false,
    message: "",
    type: "",
}

const CHANGE_OPEN_STATUS = "CHANGE_OPEN_STATUS";
const CHANGE_MESSAGE = "CHANGE_MESSAGE";
const CHANGE_TYPE = "CHANGE_TYPE";
const SEND_NOTIFICATION = "SEND_NOTIFICATION";

const notificationManagerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_OPEN_STATUS:
            return { ...state, open: action.payload }
        case CHANGE_MESSAGE:
            return {...state, message: action.payload}
        case CHANGE_TYPE:
            return {...state, type: action.payload}
        case SEND_NOTIFICATION:
            return {...state, open: true, message: action.payload.message, type: action.payload.type}
        default:
            return state;
    }
}

export const changeOpenStatusAction = (payload) => ({type: CHANGE_OPEN_STATUS, payload: payload});
export const changeMessageAction = (payload) => ({type: CHANGE_MESSAGE, payload: payload});
export const changeTypeAction = (payload) => ({type: CHANGE_TYPE, payload: payload});
export const sendNotificationAction = (payload) => ({type: SEND_NOTIFICATION, payload: payload});

export default notificationManagerReducer;