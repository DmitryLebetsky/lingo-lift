class User {
    userId = 0;
    username = '';
    password = '';
    setUser(userId = 0, username = '', password = '') {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }
}

const user = new User();

export default user;