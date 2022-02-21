import { Component } from "react";
import css from "./Tasks.module.css";
class Tasks extends Component {
  render() {
    return (
      <ul className={css["task-wrapper"]}>
        {this.props.passedData.map((obj) => (
          <li key={obj.id} className={css["individual-tasks-wrapper"]}>
            <label htmlFor={obj.id} className={css["container"]}>
              <div className={css["check-box"]}>
                <input id={obj.id} type="checkbox" />
                <span className={css["individual-task"]}>{obj.data}</span>
                <span className={css["checkmark"]}></span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    );
  }
}

export default Tasks;
