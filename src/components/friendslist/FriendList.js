import React from 'react';
import styles from './friends.module.css';

function FriendsList({ friends }) {
  return (
    <ul className="friends-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={styles.item} key={id}>
          <span
            className={styles.status}
            style={
              isOnline
                ? { backgroundColor: 'green' }
                : { backgroundColor: 'red' }
            }
          ></span>
          <img className={styles.avatar} src={avatar} alt={name} />
          <span className={styles.name}>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;
