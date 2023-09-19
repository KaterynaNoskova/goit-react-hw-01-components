export const Statistics = ({ title, statistics }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {statistics.map(({id, label, percentage}) => (
            <li className="item" key={id}>
          <span className="stats-label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
        ))}
      </ul>
    </section>
  );
};
