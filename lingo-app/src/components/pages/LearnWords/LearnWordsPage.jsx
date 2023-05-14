import React, { Component } from 'react';

import StartView from '../StartView';

class LearnWordsPage extends Component {
    handleStartNewLearning = () => {

    }

    render() {
        const isStartLearning = false;
        const output = !isStartLearning ? (
            <StartView
                onStartNewLearning={this.handleStartNewLearning}
            />
        ) : (
            <div>PLAAAAYING</div>
        );
        return <>{output}</>;
    }
}

export default LearnWordsPage;