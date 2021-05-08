import React from 'react';
import PropTypes from 'prop-types';
import './history.scss'
import HistoryItem from '../HistoryItem'
History.propTypes = {

};

function History(props) {
    const { data, deleteHistory } = props;

    let elements = data !== null ? data.map((item, index) => {
        return <HistoryItem prevDisplay={item.prevDisplay} result={item.result} no={index + 1} />
    }) : [];
    function handleDeleteHistory() {
        let history = localStorage.getItem('history');
        if (history) {
            localStorage.removeItem('history');
        }
        deleteHistory();
    }
    return (
        <div className="history">
            <div className="history__title">
                <h2>History</h2>
            </div>
            <div className="history__list">
                {elements}
            </div>
            <div className="history__delete" onClick={handleDeleteHistory}>
                <p>Delete</p>
            </div>
        </div>
    );
}

export default History;