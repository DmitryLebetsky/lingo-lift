import './App.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SignInPage from './components/pages/SignIn';
import SignUpPage from './components/pages/SignUp';
import LearnWordsPage from './components/pages/LearnWords';
import VocabularyPage from './components/pages/Vocabulary';

import { pagesPaths } from './helpers/constants';

const router = createBrowserRouter([
  {
    path: pagesPaths.signIn,
    element: <SignInPage />,
  },
  {
    path: pagesPaths.signUp,
    element: <SignUpPage />,
  },
  {
    path: pagesPaths.learnWords,
    element: <LearnWordsPage />,
  },
  {
    path: pagesPaths.vocabulary,
    element: <VocabularyPage />,
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
