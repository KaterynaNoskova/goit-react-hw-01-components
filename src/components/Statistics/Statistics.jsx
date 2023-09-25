import css from './Statistics.module.css';

export const Statistics = ({ title, statistics }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {statistics.map(({ id, label, percentage }) => (
          <li className={css.item} key={id}>
            <span className={css.statsLabel}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
