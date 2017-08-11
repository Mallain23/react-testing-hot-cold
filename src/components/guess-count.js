import React from 'react';
import {connect} from 'react-redux';

import './guess-count.css';

export function GuessCount(props) {
    return (
        <p>
            Guess #<span id="count">{props.guessCount}</span>!
        </p>
    );
}

const mapStateToProps = state => ({
  guessCount: state.guesses.length
})

export default connect(mapStateToProps)(GuessCount)
