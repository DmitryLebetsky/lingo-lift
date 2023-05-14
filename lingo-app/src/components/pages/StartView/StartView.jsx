import React from 'react';

import LiquidButton from '../../../basicComponents/LiquidButton';

import {pagesInfo, text} from '../../../helpers/constants';

const StartView = ({ onStartNewLearning }) => (
  <div className="lw-startview__wrapper learn-words">
    <h1 className="lw-startview__wrapper__title">{ pagesInfo.learnWords.title }</h1>
    <div className="lw-icons-container">
      <span className="lw-icons-container__icon pencil"></span>
      <span className="lw-icons-container__icon book"></span>
      <span className="lw-icons-container__icon hat"></span>
    </div>
    <p className="lw-startview__wrapper__description">{ pagesInfo.learnWords.description }</p>
    <div className="lw-startview__button-group">
      <LiquidButton
        className="lw-startview__button"
        onClick={() => onStartNewLearning()}
        text={text.en.start}
      />
    </div>
  </div>
);

export default StartView;