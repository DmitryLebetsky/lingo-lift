import {db} from '../base';
import {addDoc, collection} from "firebase/firestore";

class WordsService {
    async addWords(userId, words = []) {
        try {
            let userCollectionRef = collection(db, userId);
            words.forEach(async (word) => {
                await addDoc(userCollectionRef, word);
            });
        } catch (error) {
            alert(error);
        }
    }
}

const wordsService = new WordsService();
export default wordsService;