import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../basicComponents/Input';
import Button from '../../../basicComponents/Button';

import { pagesInfo, text } from '../../../helpers/constants';

class SignInPage extends Component {
    onSubmitForm = (event) => {

    }
    onChangeEmail = (event) => {

    }
    onChangePass = (event) => {

    }
    render() {
        const emailValid = true; // const { emailValid } = this.state;
        return (
            <section className="sign-in-page">
                <h1>{pagesInfo.signIn.title}</h1>
                <form className="sign-in-form" onSubmit={this.onSubmitForm}>
                    <Input
                        error={!emailValid}
                        placeholder={text.en.email}
                        className="sign-in-form__email"
                        onChange={this.onChangeEmail}
                    />
                    <Input
                        type="password"
                        placeholder={text.en.password}
                        className="sign-in-form__password"
                        onChange={this.onChangePass}
                    />
                    <Button value={pagesInfo.signIn.title} className="sign-in-form__button" />
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
}

export default SignInPage;