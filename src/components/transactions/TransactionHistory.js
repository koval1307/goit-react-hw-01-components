import React from "react";
import styles from './transactions.module.css';

function TransactionHistory({ transactions }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.titles}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr className={styles.lineItem} key={id}>
            <td> {type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
