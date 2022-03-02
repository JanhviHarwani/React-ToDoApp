import Task from "./Task";
import css from "./Tasks.module.css";
import PropTypes, { bool } from "prop-types";

function Tasks({ passedData, setToDos }) {
  return (
    <ul className={css["task-wrapper"]}>
      {passedData.map((obj) => (
        <Task
          setToDosStatus={setToDos}
          completed={obj.completed}
          key={obj.id}
          id={obj.id}
          data={obj.data}
        />
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  passedData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      data: PropTypes.string,
      completed: bool,
    })
  ),
  setToDos: PropTypes.func
};
export default Tasks;
