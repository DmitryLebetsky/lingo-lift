import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../../basicComponents/Input';
import LiquidButton from '../../../basicComponents/LiquidButton';

import { pagesInfo, text } from '../../../helpers/constants';

import { useDispatch } from 'react-redux';

import loginManager from '../../../entities/login_manager';
import user from '../../../entities/user';

import {auth} from '../../../base';

import { changeLoggedStatusAction } from '../../../store/loginManagerReducer';

const SignInPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let email = '';
    let password = '';
    const onSubmitForm = async (event) => {
        event.preventDefault();
        await loginManager.logIn(email, password);
        dispatch(changeLoggedStatusAction(loginManager.isAuthorized));
        if (loginManager.isAuthorized) {
            navigate(pagesInfo.learnWords.path);
            user.setUser(auth.currentUser.uid, email, password);
        }
    }
    const onChangeEmail = (event) => {
        email = event.target.value;
    }
    const onChangePass = (event) => {
        password = event.target.value;
    }
    const emailValid = true; // const { emailValid } = this.state;
    return (
        <section className="sign-in-page">
            <h1>{pagesInfo.signIn.title}</h1>
            <form className="sign-in-form" onSubmit={onSubmitForm}>
                <Input
                    error={!emailValid}
                    placeholder={text.en.email}
                    className="sign-in-form__email"
                    onChange={onChangeEmail}
                />
                <Input
                    type="password"
                    placeholder={text.en.password}
                    className="sign-in-form__password"
                    onChange={onChangePass}
                />
                <LiquidButton
                    text={pagesInfo.signIn.title}
                    className="sign-in-form__button"
                />
            </form>
            <p className="sign-in-page-additional-info">
                {text.en.firstTimeHere} <Link
                    className="sign-in-page-additional-info__sign-up-link"
                    to={`/${pagesInfo.signUp.path}`}
                >
                    {pagesInfo.signUp.title}
                </Link>
            </p>
        </section>
    );
}

export default SignInPage;