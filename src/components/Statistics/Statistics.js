import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = function ({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default Statistics;
