import {notifications} from '../helpers/constants';

class NotificationManager {
    message = "";
    type = "";
    setNotification({ message, type }) {
        this.message = message;
        this.type = type;
    }
    getNotification() {
        return {
            message: this.message,
            type: this.type,
        }
    }
    setErrorNotification(error) {
        const notificationObj = notifications[error.code];
        if (notificationObj) {
            this.setNotification(notificationObj);
        } else {
            this.setNotification({ message: error.code, type: "error" });
        }
    }
}

const notificationManager = new NotificationManager();

export default notificationManager;