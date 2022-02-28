import React, { Component } from "react";
import css from "./Task.module.css";
import PropTypes from "prop-types";

class Task extends Component {
  render() {
    return (
      <li className={css["individual-tasks-wrapper"]}>
        <label htmlFor={this.props.id} className={css["container"]}>
          <div className={css["check-box"]}>
            <input id={this.props.id} type="checkbox" />
            <span className={css["individual-task"]}>{this.props.data}</span>
            <span className={css["checkmark"]}></span>
          </div>
        </label>
      </li>
    );
  }
}

Task.propTypes = {
  id: PropTypes.number,
  data: PropTypes.string,
};
export default Task;
