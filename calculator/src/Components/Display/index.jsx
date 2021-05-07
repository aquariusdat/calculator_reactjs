import React from 'react';
import PropTypes from 'prop-types';
import './display.scss'
Display.propTypes = {

};

function Display(props) {
    const { prevDisplay, result } = props;
    return (
        <div className="display">
            <p className="prevDisplay">
                {prevDisplay}
            </p>
            <p className="result">
                {result}
            </p>
        </div>
    );
}

export default Display;