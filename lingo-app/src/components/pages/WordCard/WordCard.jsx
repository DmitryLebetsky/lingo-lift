import React, { Component } from 'react';

class WordCard extends Component {
    render() {
        return (
            <div className='learn-word-card-wrapper'>
                <div className="learn-word-card">
                    <p className="learn-word-card__title">Apple</p>
                    <p className="learn-word-card__translate">Яблоко</p>
                    <button className="learn-word-card__button">Показать ответ</button>
                </div>
            </div>
        );
    }
}

export default WordCard;