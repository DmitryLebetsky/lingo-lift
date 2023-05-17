class Word {
    word_id = 0;
    word = "";
    translation = "";
    lastStudied = 0;
    nextReview = new Date();
    getWord() {
        return this;
    }
    setNextReview() {
        const daysToNextRepeat = 2 * this.lastStudied + 1;
        this.nextReview.setDate(this.nextReview.getDate() + daysToNextRepeat);
        this.lastStudied = daysToNextRepeat;
    }
}