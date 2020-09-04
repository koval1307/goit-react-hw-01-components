import React from "react";

import styles from "./profile.module.css"
import {Stats} from "./ProfileStats"
export  default function Profile(user) {
  return (
  
      <div className={styles.section}>
        <img
          className={styles.avatar}
          src={user.avatar}
          alt="user avatar"
        ></img>
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.tag}>@{user.tag}</p>
        <p className={styles.location}>{user.location}</p>

        <ul className={styles.stats}>
          <Stats {...user.stats} />
        </ul>
      </div>

  );
}
