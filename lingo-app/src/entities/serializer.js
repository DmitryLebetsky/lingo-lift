class Serializer {
    serializeWord(wordObject) {
        return {
            word: wordObject.word,
            translation: wordObject.translation,
            lastStudied: wordObject.lastStudied,
            nextReview: wordObject.nextReview,
        }
    }
}

const serializer = new Serializer();

export default serializer;