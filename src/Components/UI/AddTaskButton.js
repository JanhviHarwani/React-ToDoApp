import css from "./AddButton.module.css";

const AddTaskButton = () => {
  return (
    <button type="button" className={css["addBtn"]}>
      +
    </button>
  );
};
export default AddTaskButton;
