import { db } from '../base';
import { addDoc, collection } from "firebase/firestore";
import notificationManager from './notificationManager';
import { notifications } from '../helpers/constants';
import serializer from './serializer';

import user from './user';

class WordsService {
    async addWord(userId, word) {
        try {
            let userCollectionRef = collection(db, userId);
            await addDoc(userCollectionRef, serializer.serializeWord(word));
            notificationManager.setNotification(notifications.wordAdded);
        } catch (error) {
            notificationManager.setErrorNotification(error);
        }
    }
    async getWords() {
        try {
            const userCollectionRef = collection(db, user.userId);
        } catch (error) {
            notificationManager.setErrorNotification(error);
        }
    }
}

const wordsService = new WordsService();
export default wordsService;