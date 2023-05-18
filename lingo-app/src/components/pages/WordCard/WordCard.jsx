import React, { useState } from 'react';

import rotateBackground from '../../../assets/images/rotate.png';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

const WordCard = () => {
    const [showTranslation, setShowTranslation] = useState(false);

    const {word, translation} = useSelector(state => state.studySession.currentWord);

    const learnWordCardClasses = classNames({
        "learn-word-card": true,
        "translation": showTranslation,
    })

    return (
        <div onMouseLeave={() => {
            setShowTranslation(false);
        }} className={learnWordCardClasses}>
            <div className="learn-word-card__front">
                <div className="learn-word-card__title">{word}</div>
                <img onClick={() => {
                    setShowTranslation(true);
                }} src={rotateBackground} alt="rotate..." className="rotate" />
            </div>
            <div className="learn-word-card__back">
                <div className="learn-word-card__title">{translation}</div>
            </div>
        </div>
    );
}

export default WordCard;