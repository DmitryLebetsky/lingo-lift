import wordsService from "./wordsService";

class User {
    userId = 0;
    username = '';
    password = '';
    setUser(userId = 0, username = '', password = '') {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }
    addWord(words = []) {
        wordsService.updateInfo(this.userId, words);
    }
}

const user = new User();

export default user;