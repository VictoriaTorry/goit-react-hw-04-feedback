import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statBlock}>
      <p className={css.statItem}>Good: {good}</p>
      <p className={css.statItem}>Neutral: {neutral}</p>
      <p className={css.statItem}>Bad: {bad}</p>
      <p className={css.statItem}>Total: {total}</p>
      <p className={css.statItem}>
        Positive feedback: {positivePercentage}&#37;
      </p>
    </div>
  );
};
