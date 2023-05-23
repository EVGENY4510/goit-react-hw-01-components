import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from 'components/FriendList/FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
