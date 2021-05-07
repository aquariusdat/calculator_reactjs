import React from 'react';
import PropTypes from 'prop-types';
import './historyitem.scss'
HistoryItem.propTypes = {

};

function HistoryItem(props) {
    const { prevDisplay, result, no } = props;
    return (
        <div className="history__item">

            <div className="history__item-display">
                <div className="history__item-no">
                    {no}.
                </div>
                <p>{prevDisplay}</p>
            </div>
            <div className="history__item-result">
                {result}
            </div>
        </div>
    );
}

export default HistoryItem;