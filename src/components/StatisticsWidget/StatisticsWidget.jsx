import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Component } from 'react';

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

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions options={this.methodUp} />
        <h3>Statistics</h3>
        <div></div>
        <div>
          <li>good: {good}</li>
          <li>neutral: {neutral}</li>
          <li>bad: {bad}</li>
          <li>total</li>
          <li>positive feedback</li>
        </div>
      </div>
    );
  }
}
