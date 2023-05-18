import React, { useEffect } from 'react';
import { Route, Routes as Switch, useNavigate } from 'react-router-dom';

import { pagesInfo } from '../../helpers/constants';

import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';
import LearnWordsPage from '../pages/LearnWords';
import VocabularyPage from '../pages/Vocabulary';

import loginManager from '../../entities/loginManager';

const Main = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!loginManager.isAuthorized) {
            navigate(pagesInfo.signIn.path);
          }
    }, [navigate]) 

    return (
        <main className='main'>
            <Switch>
                <Route path={pagesInfo.signIn.path} element={<SignInPage />} />
                <Route path={pagesInfo.signUp.path} element={<SignUpPage />} />
                <Route path={pagesInfo.learnWords.path} element={<LearnWordsPage />} />
                <Route path={pagesInfo.vocabulary.path} element={<VocabularyPage />} />
            </Switch>
        </main>
    );
}

export default Main;