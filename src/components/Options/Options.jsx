import OptionButton from "../OptionButton/OptionButton";
import css from "./Options.module.css";

const Options = () => {
  return (
    <div className={css.optionsWrapper}>
      <OptionButton name="Good" />
      <OptionButton name="Neutral" />
      <OptionButton name="Bad" />
    </div>
  );
};

export default Options;
