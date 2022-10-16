import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { StatisticList } from 'components/StatisticsList/StatisticsList';
import { Component } from 'react';
import { Section } from 'components/Section/Section';

export class StatisticsWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  methodUp = method => {
    this.setState(prevState => ({
      [method]: prevState[method] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = Number(
      Math.round((this.state.good / this.countTotalFeedback()) * 100)
    );
    return total ? total : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    console.log('SW:', this.state);

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={this.methodUp} />
        </Section>
        <Section title={'Statistics'}>
          <StatisticList
            stat={this.state}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      </div>
    );
  }
}

// good={good} neutral={neutral} bad={bad} total={total}
