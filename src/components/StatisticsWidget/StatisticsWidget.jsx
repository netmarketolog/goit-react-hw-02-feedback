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
{
  /* //   <Container>
    //     <PaymentMethods
    //       selected={selectedMethod}
    //       onSelect={this.selectPaymentMethod}
    //     />
    //     <hr />
    //     {selectedMethod === paymentMethods.visa && <div>Visa form</div>}
    //     {selectedMethod === paymentMethods.mastercard && (
    //       <div>Mastercard form</div>
    //     )}
    //     {selectedMethod === paymentMethods.applepay && (
    //       <div>Apple Pay form</div>
    //     )}
    //   </Container> */
}
{
  /* <h3>Statistics</h3>
        <div></div>
        <div>
          <li>good: {good}</li>
          <li>neutral: {neutral}</li>
          <li>bad: {bad}</li>
          <li>total</li>
          <li>positive feedback</li>
        </div> */
}
// methodUp = method => {
//   switch (method) {
//     case 'good':
//       this.setState(prevState => ({
//         good: prevState.good + 1,
//       }));
//       break;
//     case 'neutral':
//       this.setState(prevState => ({
//         neutral: prevState.neutral + 1,
//       }));
//       break;
//     case 'bad':
//       this.setState(prevState => ({
//         bad: prevState.bad + 1,
//       }));
//       break;
//     default:
//       return console.log(method);
//   }
// };
//   selectPaymentMethod = method => {
//     this.setState({
//       selectedMethod: method,
//     });
//   };

// neutralMethodUp = method => {
//   this.setState({
//     neutral: method + 1,
//   });
// };
// badMethodUp = method => {
//   this.setState({
//     bad: method + 1,
//   });
// };
// onLeaveFeedback = e => {
//   this.state(prevState => ({}));
// };
