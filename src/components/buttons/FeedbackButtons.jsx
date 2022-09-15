import PropTypes from 'prop-types';
import styles from './Btn.module.css';

const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  return options.map(btnName => {
    return (
      <button
        key={btnName}
        type="button"
        name={btnName}
        className={styles.btn1}
        onClick={onLeaveFeedback}
      >
        {btnName}
      </button>
    );
  });
};

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackButtons;
