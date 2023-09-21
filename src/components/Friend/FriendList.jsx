import css from './Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};  
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendItem}>
      <span className={isOnline ? `${css.status} ${css.green}` : `${css.status} ${css.red}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
