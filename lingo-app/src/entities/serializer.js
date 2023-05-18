import Word from "./word";

class Serializer {
    serializeWord(wordObject) {
        return {
            word: wordObject.word,
            translation: wordObject.translation,
            lastStudied: wordObject.lastStudied,
            nextReview: wordObject.nextReview,
        }
    }
    deserializeUserWords(userData) {
        const userDocs = userData.docs.map((doc) => ({...doc.data(), wordId: doc.id}));
        const userWords = userDocs.map((data) => {
            console.log(data.wordId);
            return new Word(data.word, data.translation, data.lastStudied, data.nextReview.toDate(), data.wordId)
        })
        return userWords;
    }
}

const serializer = new Serializer();

export default serializer;