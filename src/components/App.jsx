import { Box } from './App.styled';
import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const states = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const options = Object.keys(states);

  const counterReviews = propName => {
    states[propName](prevState => prevState + 1);
  };

  const countTotalFeedback = () => bad + neutral + good;

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback() && ((good / countTotalFeedback()) * 100).toFixed(0);

  return (
    <Box>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={counterReviews} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Box>
  );
};
