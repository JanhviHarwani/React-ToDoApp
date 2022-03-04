import Task from "./Task";
import css from "./Tasks.module.css";
import PropTypes, { bool } from "prop-types";

function Tasks({ taskAdded, setToDos }) {
  return (
    <ul className={css["task-wrapper"]}>
      {taskAdded.map((obj) => (
        <Task setToDosStatus={setToDos} key={obj.id} {...obj} />
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  taskAdded: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      data: PropTypes.string,
      completed: bool,
    })
  ),
  setToDos: PropTypes.func,
};
export default Tasks;
