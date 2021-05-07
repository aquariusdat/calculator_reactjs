import React from 'react';
import PropTypes from 'prop-types';
import './button.scss'
Button.propTypes = {

};

function Button(props) {
    const { display, zero, operator, del } = props;

    let buttonStyle = {
        backgroundColor: operator === "true" ? "#836E4F" : del === "true" ? "#FF5C5C" : "rgba(0,0,0,0.3)"
    }



    return (
        <button className={props.zero ? "button zero" : "button"} style={buttonStyle} onClick={() => { props.onClick(display) }}>
            <p>{display}</p>
        </button>
    );
}

export default Button;