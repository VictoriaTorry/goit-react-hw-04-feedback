import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(item => {
        return (
          <button
            key={item}
            className={css.btn}
            onClick={onLeaveFeedback}
            name={item}
          >
            {item}
          </button>
        );
      })}
    </>
  );
};
