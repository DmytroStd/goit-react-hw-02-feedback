import { Component } from 'react';

import Section from './section/Section';
import Statistic from './statistic/Statistic';
import FeedbackButtons from './buttons/FeedbackButtons';
import Notification from './notification/Notification';
import styles from '../components/section/Container.module.css';

export class App extends Component {
  state = {
    positive: 0,
    neutral: 0,
    negative: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    const { positive, neutral, negative } = this.state;
    return positive + neutral + negative;
  }

  countPositiveFeedbackPercentage() {
    const { positive } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = total ? Math.round((positive / total) * 100) : 0;
    return positivePercentage;
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { positive, neutral, negative } = this.state;
    const feedbacks = Object.keys(this.state);
    return (
      <>
        <div className={styles.container}>
          <Section title="please leave feedback" className={styles.hero__title}>
            <div className={styles.btn_box}>
              <FeedbackButtons
                options={feedbacks}
                onLeaveFeedback={this.onLeaveFeedback}
              />
            </div>
          </Section>

          {!total ? (
            <Notification message="there is no feedback" />
          ) : (
            <Section title="statistic" className={styles.secondary__title}>
              <Statistic
                positive={positive}
                neutral={neutral}
                negative={negative}
                total={total}
                positivePercentage={positivePercentage}
              />
            </Section>
          )}
        </div>
      </>
    );
  }
}
