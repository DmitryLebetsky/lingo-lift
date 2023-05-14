import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../basicComponents/Input';
import LiquidButton from '../../../basicComponents/LiquidButton';

import { pagesInfo, text } from '../../../helpers/constants';

class SignUpPage extends Component {
    onSubmitForm = (event) => {

    }
    onChangeEmail = (event) => {

    }
    onChangePass = (event) => {

    }
    onChangeRepeatPass = (event) => {

    }
    isFormValid = (event) => {
        return true;
    }
    render() {
        const emailValid = true;
        const passValid = true;
        const passRepeatValid = true;
        /*const {
          nickValid, emailValid, passValid, passRepeatValid, userId,
        } = this.state;*/
        return (
            <section className="sign-up-page">
                <h1>{pagesInfo.signUp.title}</h1>
                <form className="sign-up-form" onSubmit={this.onSubmitForm}>
                    <Input
                        required
                        error={!emailValid}
                        placeholder={text.en.email}
                        className="sign-up-form__email"
                        onChange={this.onChangeEmail} />
                    <Input
                        required
                        error={!passValid}
                        placeholder={text.en.password}
                        className="sign-up-form__password"
                        onChange={this.onChangePass}
                        type="password" />
                    <Input
                        required
                        error={!passRepeatValid}
                        placeholder={text.en.repeatPassword}
                        className="sign-up-form__repeat-password"
                        onChange={this.onChangeRepeatPass}
                        type="password" />

                    <LiquidButton
                        text={pagesInfo.signUp.title}
                        className="sign-up-form__button"
                        disabled={!this.isFormValid()}
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
}

export default SignUpPage;