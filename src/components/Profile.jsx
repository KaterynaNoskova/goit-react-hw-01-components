import css from '../Profile.modules.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>5603</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>4827</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>1308</span>
        </li>
      </ul>
    </div>
  );
};
