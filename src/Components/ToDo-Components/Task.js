import React, { Component } from "react";
import css from "./Task.module.css";
import PropTypes from "prop-types";

class Task extends Component {
  statusHandler(completed, id) {
    this.props.setToDosStatus((prevTodos) => [
      ...prevTodos.map((todo) => {
        if (todo.id === id) {
          return{...todo,completed:!todo.completed};
        }
        return todo;
      }),
    ]);
  }

  render() {
    return (
      <li className={css["individual-tasks-wrapper"]}>
        <label htmlFor={this.props.id} className={css["container"]}>
          <div className={css["check-box"]}>
            <input
              id={this.props.id}
              type="checkbox"
              checked={this.props.completed}
              onChange={(e) => {
                this.statusHandler(e.target.checked, this.props.id);
              }}
            />
            <span className={css["individual-task"]}>{this.props.data}</span>
            <span className={css["checkmark"]}></span>
          </div>
        </label>
      </li>
    );
  }
}

Task.propTypes = {
  id: PropTypes.string,
  data: PropTypes.string,
  completed:PropTypes.bool,
  setToDosStatus:PropTypes.func
};
export default Task;
