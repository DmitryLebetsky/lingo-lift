const pagesInfo = {
    signIn: {
        title: 'Sign in',
        path: '/',
        loggedNeed: false,
    },
    signUp: {
        title: 'Sign up',
        path: '/sign-up/',
        loggedNeed: false,
    },
    learnWords: {
        title: 'Learn words',
        path: '/learn-words/',
        description: 'Expand your English vocabulary with built-in word repetition rules.',
        loggedNeed: true,
    },
    vocabulary: {
        title: 'Add word',
        path: '/vocabulary/',
        loggedNeed: true,
    },
};

const appName = 'LingoLift';

const text = {
    en: {
        email: 'Email',
        password: "Password",
        firstTimeHere: "First time here?",
        repeatPassword: "Repeat password",
        alreadyRegistered: "Already registered?",
        start: "Start",
        word: "Word",
        translation: "Translation",
        add: "Add",
    }
}

const notifications = {
    signIn: {
        type: "success",
        message: "Welcome back! We're glad to see you again."
    },
    signUp: {
        type: "success",
        message: "Congratulations! You've successfully signed up. Welcome to LingoLift!",
    },
    logOut: {
        type: "success",
        message: "Goodbye! You've been successfully signed out. We hope to see you again soon!",
    },
    wordAdded: {
        type: "success",
        message: "Word added successfully!",
    },
    "auth/invalid-email": {
        type: "error",
        message: "Invalid email format. Please enter a valid email address."
    },
    "auth/wrong-password": {
        type: "error",
        message: "Incorrect password. Please double-check your password and try again."
    },
    "auth/weak-password": {
        type: "error",
        message: "Weak password: Please choose a stronger password for your account.",
    },
    "auth/email-already-in-use": {
        type: "error",
        message: "Email already in use. Please use a different email or sign in with your existing account.",
    },
    "auth/user-not-found": {
        type: "error",
        message: "User not found. Please check your credentials and try again.",
    },
    repeatPasswordCorrectly: {
        type: "error",
        message: "Password mismatch. Please check your password and try again.",
    },
    noWordsToStudy: {
        type: "error",
        message: "No words to study or repeat today. Feel free to add new words to your collection and expand your vocabulary!",
    },
}

export {
    pagesInfo,
    appName,
    text,
    notifications,
}