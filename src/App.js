import React from 'react';
import PropTypes from 'prop-types';
import Profile from './components/profile/Profile';
import styles from './components/general.module.css';
import user from './components/profile/user.json';
import Statistics from './components/statistics/statistics';
import statisticalData from './components/statistics/statistical-data.json';
import friendsData from './components/friendslist/friends.json';
import FriendsList from './components/friendslist/FriendList';
import TransactionHistory from './components/transactions/TransactionHistory';
import transactionsData from './components//transactions/transactions.json';
const App = () => {
  return (
    <div className={styles.wraper}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <section className={styles.statistics}>
        <h2 class="stats_title">Upload stats</h2>
        <Statistics stats={statisticalData} />
      </section>
      <>
        <FriendsList friends={friendsData} />
      </>

      <TransactionHistory transactions={transactionsData} />
    </div>
  );
};

export default App;


Profile.PropTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};