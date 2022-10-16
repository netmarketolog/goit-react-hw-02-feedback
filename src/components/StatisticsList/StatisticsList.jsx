export const StatisticList = ({
  total,
  positiveFeedback,
  stat: { good, neutral, bad },
}) => {
  return (
    <div>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total: {total} </li>
      <li>positive feedback: {positiveFeedback}%</li>
    </div>
  );
};
