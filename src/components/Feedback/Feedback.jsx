import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterReviews = propName => {
    this.setState(prevState => ({ [propName]: prevState[propName] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.bad + this.state.neutral + this.state.good;

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() &&
    ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.counterReviews} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
