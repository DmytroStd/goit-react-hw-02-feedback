import React from 'react';
import PropTypes from "prop-types";

const Controls = ({ onPositive, onNeutral, onNegative }) => (
    <div className='Counter__controls'>
        <h2 className='Title'>please leave feedback</h2>
        <ul className='Control__list'></ul>
        <li className='Control__item'>
            <button type='button' onClick={onPositive}>
            positive
            </button>
        </li>
        <li className='Control__item'>
            <button type='button' onClick={onNeutral}>
            neutral
            </button>
        </li>
        
        <li className='Control__item'>
            <button type='button' onClick={onNegative}>
            negative
            </button>
        </li>
        <h2>statistics</h2>
    </div>
);

Controls.propTypes = {
    onPositive: PropTypes.func.isRequired,
    onNeutral: PropTypes.func.isRequired,
    onNegative: PropTypes.func.isRequired,
};


export default Controls;