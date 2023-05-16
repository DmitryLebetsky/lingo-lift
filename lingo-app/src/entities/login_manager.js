import { auth } from "../base";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

class LoginManager {
    isAuthorized = false;
    async signUp(email, password) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            this.isAuthorized = true;
        } catch (error) {
            alert(error);
        }
    }
    async logIn(email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            this.isAuthorized = true;
        } catch (error) {
            alert(error);
        }
    }
    async logOut() {
        try {
            await signOut(auth);
            this.isAuthorized = false;
        } catch (error) {
            alert(error);
        }
    }
}

const loginManager = new LoginManager();

export default loginManager;