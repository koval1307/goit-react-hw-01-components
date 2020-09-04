import React from "react";
import styles from "./statistics.module.css"
import colorRandom from './colorRandom';

function Statistics({ stats }) {
  return (
    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li className={styles.item} style={{ backgroundColor: colorRandom() }} key={id}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  );
}

export default Statistics;
