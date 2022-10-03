import { Component } from 'react';
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

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStateClick = feedback => {
    Notiflix.Notify.success(`Thank you for leaving a ${feedback} feedback!`);
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      return (acc += value);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    if (good !== 0) {
      const result = (good * 100) / total;
      return Math.round(result);
    } else {
      return 0;
    }
  };

  render() {
    const {
      state,
      handleStateClick,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={state}
              onLeaveFeedback={handleStateClick}
            />
            {countTotalFeedback() > 0 ? (
              <Statistics
                options={state}
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
  }
}
