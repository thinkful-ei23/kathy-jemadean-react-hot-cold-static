import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#instructions" onClick={(e) => props.onWhat()}>>
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#newGame" onClick={(e) => console.log('Clicked!')}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

