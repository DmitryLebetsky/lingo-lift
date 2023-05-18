class Word {
    word_id;
    word;
    translation;
    lastStudied;
    nextReview = new Date();
    constructor(word = "", translation = "") {
        this.word = word;
        this.translation = translation;
        this.lastStudied = 0;
        this.nextReview = new Date();
        this.wordId = new Date();
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