import { db } from '../base';
import { addDoc, collection } from "firebase/firestore";
import notificationManager from './notificationManager';
import { notifications } from '../helpers/constants';
import Word from './word';
import serializer from './serializer';

class WordsService {
    async addWords(userId, words = []) {
        try {
            let userCollectionRef = collection(db, userId);
            await addDoc(userCollectionRef, serializer.serializeWord(new Word("hey", "привет")));
            notificationManager.setNotification(notifications.wordAdded);
        } catch (error) {
            alert(error);
        }
    }
}

const wordsService = new WordsService();
export default wordsService;