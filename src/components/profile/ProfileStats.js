import React, { Fragment } from 'react';
import styles from './profile.module.css';
export function Stats(stats) {
  return (
    <Fragment>
      {Object.keys(stats).map(el => (
        <li className={styles.item}>
          <span className={styles.label}>{el}</span>
          <span className={styles.quantity}>{stats[el]}</span>
        </li>
      ))}
    </Fragment>
  );
}
