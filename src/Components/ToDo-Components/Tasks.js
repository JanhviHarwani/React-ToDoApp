import { Component } from "react";
import Task from "./Task";
import css from "./Tasks.module.css";
import PropTypes from "prop-types";

class Tasks extends Component {
  render() {
    return (
      <ul className={css["task-wrapper"]}>
        {this.props.passedData.map((obj) => (
          <Task key={obj.id} htmlFor={obj.id} id={obj.id} data={obj.data} />
        ))}
      </ul>
    );
  }
}
Tasks.propTypes={
  passedData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      data: PropTypes.string,
    })
  ),
}
export default Tasks;
