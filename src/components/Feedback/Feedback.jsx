import React, { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statisctics/Statistics';
import Notification from 'components/Notification/Notification';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = type => {
    if (type === 'Good') {
      setGood(good + 1);
    } else if (type === 'Neutral') {
      setNeutral(neutral + 1);
    } else if (type === 'Bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }

    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} handleFeedback={handleFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalCount={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no Feedback!'} />
        )}
      </Section>
    </>
  );
}

export default Feedback;
