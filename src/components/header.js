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
        if (this.state.showInstructions===false) {
        return (
            <header>
                <TopNav onWhat={() => this.showInstructions()} />
                <h1>HOT or COLD</h1>
            </header>
        )} else {
        return (
            <InfoModal onGotIt={() => this.hideInstructions()} />
        )}
    }
    
}

