import { db } from '../base';
import { getDocs, addDoc, collection, updateDoc, doc, } from "firebase/firestore";
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
    async getWords(userId) {
        try {
            const userCollectionRef = collection(db, userId);
            const userData = await getDocs(userCollectionRef);
            const userWords = serializer.deserializeUserWords(userData);
            if (!userWords.length) {
                notificationManager.setNotification(notifications.noWordsToStudy);
            }
            return userWords;
        } catch (error) {
            alert(error);
            notificationManager.setErrorNotification(error);
        }
    }
    async updateWord(wordObj) {
        try {
            const wordDoc = doc(db, user.userId, wordObj.wordId);
            await updateDoc(wordDoc, serializer.serializeWord(wordObj));
        } catch (error) {
            alert(error);
        }
    }
}

const wordsService = new WordsService();
export default wordsService;