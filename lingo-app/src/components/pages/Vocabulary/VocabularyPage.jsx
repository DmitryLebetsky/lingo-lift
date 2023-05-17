import React, { Component } from 'react';

import Input from '../../../basicComponents/Input';
import LiquidButton from '../../../basicComponents/LiquidButton';

import {pagesInfo, text} from '../../../helpers/constants';

class VocabularyPage extends Component {
    onSubmitForm = (event) => {
        event.preventDefault();
    }
    onChangeWord = (event) => {

    }
    onChangeTranslation = (event) => {

    }
    render() {
        const emailValid = true; // get from state
        return (
            <section className="vocabulary-page">
                <h1>{pagesInfo.vocabulary.title}</h1>
                <form className="vocabulary-page-form" onSubmit={this.onSubmitForm}>
                    <Input
                        error={!emailValid}
                        placeholder={text.en.word}
                        className="vocabulary-page-form__word"
                        onChange={this.onChangeWord}
                    />
                    <Input
                        placeholder={text.en.translation}
                        className="vocabulary-page-form__translation"
                        onChange={this.onChangePass}
                    />
                    <LiquidButton
                        text={text.en.add}
                        className="vocabulary-page-form__button"
                    />
                </form>
            </section>
        );
    }
}

export default VocabularyPage;