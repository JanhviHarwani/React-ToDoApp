import Task from "./Task";
import css from "./Tasks.module.css";
import PropTypes from "prop-types";

function Tasks({ passedData }) {
  
  return (
    <ul className={css["task-wrapper"]}>
      
      {passedData.map((obj) => (
        <Task key={obj.id} id={obj.id} data={obj.data} />
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  passedData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      data: PropTypes.string,
    })
  ),
};
export default Tasks;
