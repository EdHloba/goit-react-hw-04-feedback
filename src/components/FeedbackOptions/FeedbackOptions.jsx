import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, handleFeedback }) {
  return (
    <ul className={css.optionsList}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              onClick={() => handleFeedback(option)}
              type="button"
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleFeedback: PropTypes.func.isRequired,
};
