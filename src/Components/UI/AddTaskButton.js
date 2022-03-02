import { useState } from "react";
import css from "./AddButton.module.css";
import PropTypes from "prop-types";

const AddTaskButton = ({ onButtonClicked }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const clickHandler = () => {
    setButtonClicked(true);
    onButtonClicked(buttonClicked);
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
