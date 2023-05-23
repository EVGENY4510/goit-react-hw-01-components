import PropTypes from 'prop-types';
import css from 'components/FriendListItem/FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      {isOnline ? (
        <span className={css.statusOnline}></span>
      ) : (
        <span className={css.statusOffline}></span>
      )}
      {/* <span className="status"></span> */}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};