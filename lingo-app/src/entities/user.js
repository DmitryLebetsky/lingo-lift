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
    async addWord(word) {
        await wordsService.addWord(this.userId, word);
    }
}

const user = new User();

export default user;