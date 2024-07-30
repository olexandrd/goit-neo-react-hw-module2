import OptionButton from "../OptionButton/OptionButton";
import css from "./Options.module.css";

const Options = ({ feedbacks, clickHandler, resetHandler }) => {
  return (
    <div className={css.optionsWrapper}>
      <OptionButton clickHandler={() => clickHandler("good")} name="Good" />
      <OptionButton
        clickHandler={() => clickHandler("neutral")}
        name="Neutral"
      />
      <OptionButton clickHandler={() => clickHandler("bad")} name="Bad" />

      {feedbacks > 0 ? (
        <OptionButton clickHandler={resetHandler} name="Reset" />
      ) : null}
    </div>
  );
};

export default Options;
