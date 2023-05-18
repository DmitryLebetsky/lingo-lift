class Word {
    word_id;
    word;
    translation;
    lastStudied;
    nextReview;
    constructor(word = "", translation = "", lastStudied = 0, nextReview = new Date(), wordId = Date.now()) {
        this.word = word;
        this.translation = translation;
        this.lastStudied = lastStudied;
        this.nextReview = nextReview;
        this.wordId = wordId;
    }
    getWord() {
        return this;
    }
    setNextReview() {
        const daysToNextRepeat = 2 * this.lastStudied + 1;
        this.nextReview.setDate(this.nextReview.getDate() + daysToNextRepeat);
        this.lastStudied = daysToNextRepeat;
    }
}

export default Word;