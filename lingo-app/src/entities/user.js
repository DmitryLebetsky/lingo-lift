import { notifications } from "../helpers/constants";
import notificationManager from "./notificationManager";
import studySession from "./studySession";
import wordsService from "./wordsService";

class User {
    userId = 0;
    username = '';
    password = '';
    setUser(userId = 0, username = '', password = '') {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }
    async addWord(word) {
        await wordsService.addWord(this.userId, word);
    }
    async startLearning() {
        const userWords = await wordsService.getWords(this.userId);
        studySession.generateSession(userWords);
        if (!studySession.wordsForSession.length) {
            notificationManager.setNotification(notifications.noWordsToStudy);
        } else {
            studySession.isInProcess = true;
        }
    }
}

const user = new User();

export default user;