import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttons = options.map(option => (
    <Button
      type="button"
      onClick={onLeaveFeedback}
      key={option}
    >
      {option}
    </Button>
  ));

  return <> {buttons}</>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};