class NotificationManager {
    message = "";
    type = "";
    setNotification({message, type}) {
        this.message = message;
        this.type = type;
    }
    getNotification() {
        return {
            message: this.message,
            type: this.type,
        }
    }
}

const notificationManager = new NotificationManager();

export default notificationManager;