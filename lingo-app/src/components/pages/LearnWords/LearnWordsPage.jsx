import React, { Component } from 'react';

import StartView from '../StartView';
import WordCard from '../WordCard';

class LearnWordsPage extends Component {
    handleStartNewLearning = () => {

    }

    render() {
        const isStartLearning = true;
        const output = !isStartLearning ? (
            <StartView
                onStartNewLearning={this.handleStartNewLearning}
            />
        ) : (
            <WordCard />
        );
        return <>{output}</>;
    }
}

export default LearnWordsPage;