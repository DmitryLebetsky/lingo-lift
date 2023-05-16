import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../../basicComponents/Input';
import LiquidButton from '../../../basicComponents/LiquidButton';

import { pagesInfo, text } from '../../../helpers/constants';

import loginManager from '../../../entities/login_manager';
import user from '../../../entities/user';

import { useDispatch } from 'react-redux';
import { changeLoggedStatusAction } from '../../../store/loginManagerReducer';

import {auth} from '../../../base';

const SignUpPage = () => {
    const navigate = useNavigate();

    let email = '';
    let password = '';
    let repeatedPassword = '';
    const dispatch = useDispatch();
    const onSubmitForm = async (event) => {
        event.preventDefault();
        if (password === repeatedPassword) {
            await loginManager.signUp(email, password);
            dispatch(changeLoggedStatusAction(loginManager.isAuthorized));
            if (loginManager.isAuthorized) {
                navigate(pagesInfo.learnWords.path);
                user.setUser(auth.currentUser.uid, email, password);
            }
        }
        console.log(email, password, repeatedPassword);
    }
    const onChangeEmail = (event) => {
        email = event.target.value;
    }
    const onChangePass = (event) => {
        password = event.target.value;
    }
    const onChangeRepeatPass = (event) => {
        repeatedPassword = event.target.value;
    }
    const isFormValid = (event) => {
        return true;
    }
    const emailValid = true;
    const passValid = true;
    const passRepeatValid = true;

    return (
        <section className="sign-up-page">
            <h1>{pagesInfo.signUp.title}</h1>
            <form className="sign-up-form" onSubmit={onSubmitForm}>
                <Input
                    required
                    error={!emailValid}
                    placeholder={text.en.email}
                    className="sign-up-form__email"
                    onChange={onChangeEmail} />
                <Input
                    required
                    error={!passValid}
                    placeholder={text.en.password}
                    className="sign-up-form__password"
                    onChange={onChangePass}
                    type="password" />
                <Input
                    required
                    error={!passRepeatValid}
                    placeholder={text.en.repeatPassword}
                    className="sign-up-form__repeat-password"
                    onChange={onChangeRepeatPass}
                    type="password" />

                <LiquidButton
                    text={pagesInfo.signUp.title}
                    className="sign-up-form__button"
                    disabled={!isFormValid()}
                />
            </form>
            <p className="sign-up-page-additional-info">
                {text.en.alreadyRegistered} <Link
                    className="sign-up-page-additional-info__sign-in-link"
                    to={pagesInfo.signIn.path}>
                    {pagesInfo.signIn.title}
                </Link>
            </p>
        </section>
    );
}

export default SignUpPage;