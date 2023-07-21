import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statisctics/Statistics';
import Notification from 'components/Notification/Notification';

class Feedback extends Component {
  constructor() {
    super();

    this.totalCount = 0;
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.totalCount += 1;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    if (this.totalCount === 0) {
      return 0;
    }

    return Math.round((good * 100) / this.totalCount);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const optionsArr = Object.keys(this.state);
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={optionsArr}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.totalCount !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalCount={this.totalCount}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'There is no Feedback!'} />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
