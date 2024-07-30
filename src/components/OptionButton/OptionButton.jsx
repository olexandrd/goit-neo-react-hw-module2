import css from "./OptionButton.module.css";

const OptionButton = ({ name, clickHandler }) => {
  return (
    <button className={css.button} onClick={clickHandler}>
      {name}
    </button>
  );
};

export default OptionButton;
