import React from "react";
import css from './Task.module.css'
import PropTypes from 'prop-types';

function Task({id,data}) {
  return (
    <li className={css["individual-tasks-wrapper"]}>
      <label htmlFor={id} className={css["container"]}>
        <div className={css["check-box"]}>
          <input id={id} type="checkbox" />
          <span className={css["individual-task"]}>{data}</span>
          <span className={css["checkmark"]}></span>
        </div>
      </label>
    </li>
  );
}
Task.propTypes={
  id:PropTypes.number,
  data:PropTypes.string
}
export default Task;
