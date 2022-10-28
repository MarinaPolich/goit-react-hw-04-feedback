import PropTypes from 'prop-types';
import { FeedbackItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <FeedbackItem>Good: {good}</FeedbackItem>
      <FeedbackItem>Neutral: {neutral}</FeedbackItem>
      <FeedbackItem>Bad: {bad}</FeedbackItem>
      <FeedbackItem>Total: {total}</FeedbackItem>
      <FeedbackItem>Positive feedback: {positivePercentage}%</FeedbackItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
