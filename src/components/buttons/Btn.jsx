import React from 'react';
import PropTypes from 'prop-types';
import styles from './Btn.module.css';

const Controls = ({ onPositive, onNeutral, onNegative }) => (
  <div className={styles.box}>
    <h1 className={styles.hero__title}>please leave feedback</h1>
    <ul className={styles.list}>
      <li className={styles.item}>
        <button className={styles.btn1} type="button" onClick={onPositive}>
          positive
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.btn2} type="button" onClick={onNeutral}>
          neutral
        </button>
      </li>

      <li className={styles.item}>
        <button className={styles.btn3} type="button" onClick={onNegative}>
          negative
        </button>
      </li>
    </ul>
    <h2 className={styles.secondary__title}>statistics</h2>
  </div>
);

Controls.propTypes = {
  onPositive: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onNegative: PropTypes.func.isRequired,
};

export default Controls;
