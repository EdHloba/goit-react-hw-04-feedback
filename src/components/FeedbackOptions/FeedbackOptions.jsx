import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.optionsList}>
      {options.map(element => {
        return (
          <li key={element}>
            <button
              option={element}
              onClick={() => onLeaveFeedback(element)}
              type="button"
            >
              {element}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
