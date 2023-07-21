import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, totalCount, positivePercentage }) {
  return (
    <div>
      <p className={css.text}>
        Good: {good}
      </p>
      <p className={css.text}>
        Neutral: {neutral}
      </p>
      <p className={css.text}>
        Bad: {bad}
      </p>

      <p className={css.text}>
        Total: {totalCount}
      </p>
      <p className={css.text}>
        Positive feedback: {`${positivePercentage()}%`}
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};