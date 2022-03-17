import css from "./AddButton.module.css";
import PropTypes from "prop-types";

const AddTaskButton = ({ setShowInput }) => {
  const clickHandler = () => {
    setShowInput(true);
  };
  return (
    <button onClick={clickHandler} type="button" className={css["addBtn"]}>
      +
    </button>
  );
};
AddTaskButton.propTypes = {
  onButtonClicked: PropTypes.func,
};
export default AddTaskButton;
