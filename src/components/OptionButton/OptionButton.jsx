import css from "./OptionButton.module.css";

const OptionButton = ({ name, onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default OptionButton;
