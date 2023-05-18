import { auth } from "../base";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import user from "./user";
import notificationManager from "./notificationManager";
import { notifications } from "../helpers/constants";

class LoginManager {
    isAuthorized = false;
    async signUp(email, password) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            this.isAuthorized = true;
            user.setUser(auth.currentUser.uid, email, password);
            notificationManager.setNotification(notifications.signUp);
        } catch (error) {
            notificationManager.setErrorNotification(error);
        }
    }
    async logIn(email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            this.isAuthorized = true;
            user.setUser(auth.currentUser.uid, email, password);
            notificationManager.setNotification(notifications.signIn);
        } catch (error) {
            notificationManager.setErrorNotification(error);
        }
    }
    async logOut() {
        try {
            await signOut(auth);
            this.isAuthorized = false;
            user.setUser();
            notificationManager.setNotification(notifications.logOut);
        } catch (error) {
            notificationManager.setErrorNotification(error);
        }
    }
}

const loginManager = new LoginManager();

export default loginManager;