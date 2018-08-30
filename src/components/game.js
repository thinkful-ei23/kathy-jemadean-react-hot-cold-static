import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [22, 45, 59],
            feedback: 'really cold',
            count: 4,
            answer: Math.floor(Math.random() * (100 - 1 + 1)) + 1
         };
    }
    render() {


        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} />
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guesses} />
            </div >
        );
    };
}

