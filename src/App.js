import ProfileCard from './components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import css from 'App.module.css';

export const App = () => {
  return (
    <ul className={css.taskWrapper}>
      <li>
        <p className={css.title}>Task-1</p>
        <ProfileCard
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </li>
      <li>
        <p className={css.title}>Task-2</p>
        <Statistics title="Upload stats" stats={data} />
      </li>
      <li>
        <p className={css.title}>Task-3</p>
        <FriendList friends={friends} />
      </li>
      <li>
        <p className={css.title}>Task-4</p>
        <TransactionHistory items={transactions} />
      </li>
    </ul>
  );
};
