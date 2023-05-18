import React from 'react';

import StartView from '../StartView';
import WordCard from '../WordCard';

import { useDispatch, useSelector } from 'react-redux';
import studySession from '../../../entities/studySession';
import { changeLearningStatusAction } from '../../../store/learningManagerReducer';
import { changeCurrentWordAction } from '../../../store/studySessionReducer';
import { changeLoadingStatusAction } from '../../../store/loadingManagerReducer';
import LiquidButton from '../../../basicComponents/LiquidButton';

const LearnWordsPage = () => {
    const dispatch = useDispatch();

    const isLearningInProcess = useSelector(state => state.learningManager.isLearningInProcess);

    const getNextWord = async () => {
        dispatch(changeLoadingStatusAction(true));
        await studySession.setNextWord();
        dispatch(changeLoadingStatusAction(false));
        if (!studySession.isInProcess) {
            dispatch(changeLearningStatusAction(false));
        } else {
            dispatch(changeCurrentWordAction(studySession.currentWord));
        }
    }

    const output = !isLearningInProcess ? (
        <StartView />
    ) : (
        <div className='learn-words-wrapper'>
            <WordCard />
            <LiquidButton onClick={getNextWord} text={">"} className='learn-words__next-button'></LiquidButton>
        </div>
    );
    return <>{output}</>;
}

export default LearnWordsPage;