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
        message: "Word was added successfuly!",
    }
}

export {
    pagesInfo,
    appName,
    text,
    notifications,
}