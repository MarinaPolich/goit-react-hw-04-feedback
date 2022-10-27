import { FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <FeedbackBtn type="button" onClick={() => onLeaveFeedback('good')}>
        Good
      </FeedbackBtn>
      <FeedbackBtn type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </FeedbackBtn>
      <FeedbackBtn type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </FeedbackBtn>
    </div>
  );
};
