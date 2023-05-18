import React from 'react';

import Input from '../../../basicComponents/Input';
import LiquidButton from '../../../basicComponents/LiquidButton';

import { pagesInfo, text } from '../../../helpers/constants';
import Word from '../../../entities/word';
import { useDispatch } from 'react-redux';
import { sendNotificationAction } from '../../../store/notificationManagerReducer';

import notificationManager from '../../../entities/notificationManager';
import user from '../../../entities/user';



const VocabularyPage = () => {
    const dispatch = useDispatch();

    let word = '';
    let translation = '';

    const onSubmitForm = async (event) => {
        event.preventDefault();
        const wordToAdd = new Word(word, translation);
        console.log(wordToAdd);
        await user.addWords([wordToAdd]);
        dispatch(sendNotificationAction(notificationManager.getNotification()));
    }
    const onChangeWord = (event) => {
        word = event.target.value;
    }
    const onChangeTranslation = (event) => {
        translation = event.target.value;
    }

    const emailValid = true; // get from state
    return (
        <section className="vocabulary-page">
            <h1>{pagesInfo.vocabulary.title}</h1>
            <form className="vocabulary-page-form" onSubmit={onSubmitForm}>
                <Input
                    error={!emailValid}
                    placeholder={text.en.word}
                    className="vocabulary-page-form__word"
                    onChange={onChangeWord}
                />
                <Input
                    placeholder={text.en.translation}
                    className="vocabulary-page-form__translation"
                    onChange={onChangeTranslation}
                />
                <LiquidButton
                    text={text.en.add}
                    className="vocabulary-page-form__button"
                />
            </form>
        </section>
    );
}

export default VocabularyPage;