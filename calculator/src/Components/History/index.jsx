import React from 'react';
import PropTypes from 'prop-types';
import './history.scss'
import HistoryItem from '../HistoryItem'
History.propTypes = {

};

function History(props) {
    const { data } = props;

    let elements = data.map((item, index) => {
        return <HistoryItem prevDisplay={item.prevDisplay} result={item.result} no={index + 1} />
    })

    return (
        <div className="history">
            <div className="history__title">
                <h2>History</h2>
            </div>
            <div className="history__list">
                {elements}
            </div>

        </div>
    );
}

export default History;