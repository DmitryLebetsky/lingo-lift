import React from 'react';

import LiquidButton from '../../../basicComponents/LiquidButton';

import {pagesInfo, text} from '../../../helpers/constants';
import user from '../../../entities/user';
import { useDispatch } from 'react-redux';
import { sendNotificationAction } from '../../../store/notificationManagerReducer';
import notificationManager from '../../../entities/notificationManager';
import { changeLearningStatusAction } from '../../../store/learningManagerReducer';
import studySession from '../../../entities/studySession';
import { changeCurrentWordAction } from '../../../store/studySessionReducer';
import { changeLoadingStatusAction } from '../../../store/loadingManagerReducer';

const StartView = () => {
  const dispatch = useDispatch();

  const onStartLearning = async () => {
    dispatch(changeLoadingStatusAction(true));
    await user.startLearning();
    dispatch(changeLoadingStatusAction(false));
    if (!studySession.isInProcess) {
      dispatch(sendNotificationAction(notificationManager.getNotification()));
    } else {
      dispatch(changeLearningStatusAction(true));
      dispatch(changeCurrentWordAction(studySession.currentWord));
    }
  };

  return (
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
          onClick={() => onStartLearning()}
          text={text.en.start}
        />
      </div>
    </div>
  );
};

export default StartView;