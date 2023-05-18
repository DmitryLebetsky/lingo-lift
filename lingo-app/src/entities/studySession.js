import wordsService from "./wordsService";

class StudySession {
    isInProcess = false;
    newWords = [];
    repeatWords = [];
    wordsForSession = [];
    sessionLength = 5;
    newWordsPerSession = 2;
    repeatWordsPerSession = 3;
    currentWord = null;
    indexOfCurrentWord = 0;
    generateSession(userWords) {
        this.newWords = [];
        this.repeatWords = [];
        this.wordsForSession = [];
        console.log(userWords);
        userWords.forEach((word) => {
            if (word.lastStudied === 0) {
                this.newWords.push(word);
            } else if (word.nextReview <= new Date()) {
                this.repeat_words.push(word);
            }
        });
        this.newWords.sort((a, b) => a.nextReview - b.nextReview);
        this.repeatWords.sort((a, b) => a.nextReview - b.nextReview);
        if (this.newWords.length < this.newWordsPerSession) {
            this.newWordsPerSession = this.newWords.length;
            this.wordsForSession.push(...this.newWords.slice(0, this.newWordsPerSession));
            this.wordsForSession.push(...this.repeatWords.slice(0, this.sessionLength - this.newWordsPerSession));
        } else {
            this.repeatWordsPerSession = this.repeatWords.length < this.repeatWordsPerSession ? this.repeatWords.length : this.repeatWordsPerSession;
            this.wordsForSession.push(...this.newWords.slice(0, this.sessionLength - this.repeatWordsPerSession));
            this.wordsForSession.push(...this.repeatWords.slice(0, this.repeatWordsPerSession));
        }
        if (this.wordsForSession.length) {
            this.currentWord = this.wordsForSession[0];
            this.indexOfCurrentWord = 0;
        }
    }
    async setNextWord() {
        if (this.currentWord != null) {
            this.currentWord.setNextReview();
            await wordsService.updateWord(this.currentWord);
        }
        const indexOfNextWord = this.indexOfCurrentWord + 1;
        if (indexOfNextWord < this.wordsForSession.length) {
            this.currentWord = this.wordsForSession[indexOfNextWord];
            this.indexOfCurrentWord = indexOfNextWord;
        } else {
            this.currentWord = null;
            this.isInProcess = false;
        }
    }
}

const studySession = new StudySession();

export default studySession;
