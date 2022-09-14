import React from 'react';

import Notification from '../notification/Notification';
import styles from './Statistic.module.css';

const Statistics = ({
  positiveValue,
  neutralValue,
  negativeValue,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      {positiveValue || neutralValue || negativeValue !== 0 ? (
        <ul>
          <li>
            <span className={styles.positive}>positive</span>: {positiveValue}
          </li>
          <li>
            <span className={styles.neutral}>neutral</span>: {neutralValue}
          </li>
          <li>
            <span className={styles.negative}> negative</span>: {negativeValue}
          </li>
          <li className={styles.total}> total: {total} </li>
          <li className={styles.positivePercentage}>
            positive percentage: {positivePercentage}%{' '}
          </li>
        </ul>
      ) : (
        <Notification message="there is no feedback" />
      )}
    </div>
  );
};

export default Statistics;
