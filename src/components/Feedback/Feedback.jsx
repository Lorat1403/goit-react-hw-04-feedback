import { useState } from 'react';
import Notiflix from 'notiflix';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Container } from './Feedback.styled';

Notiflix.Notify.init({
  fontSize: '15px',
  cssAnimationStyle: 'from-top',
  success: {
    background: '#32c6b0',
  },
});

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleStateClick = feedback => {
    Notiflix.Notify.success(`Thank you for leaving a ${feedback} feedback!`);
    setFeedback(prev => ({ ...prev, [feedback]: prev[feedback] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, value) => {
      return (acc += value);
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (feedback.good !== 0) {
      const result = (feedback.good * 100) / total;
      return Math.round(result);
    } else {
      return 0;
    }
  };

  return (
    <>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedback}
            onLeaveFeedback={handleStateClick}
          />
          {countTotalFeedback() > 0 ? (
            <Statistics
              options={feedback}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <h2>There is no feedback</h2>
          )}
        </Section>
      </Container>
    </>
  );
};

export default Feedback;
