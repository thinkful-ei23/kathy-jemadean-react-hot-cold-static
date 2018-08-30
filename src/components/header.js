import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInstructions: false

        };
    }
    showInstructions() {
        this.setState({
            showInstructions: true
        })
    }
    hideInstructions() {
        this.setState({
            showInstructions: false
        })
    }
    render() {
        return (
            <header>
                <TopNav onWhat={() => this.showInstructions()} />
                <InfoModal onGotIt={() => this.hideInstructions()} />
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};
