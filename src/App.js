import React from "react";
import TodoCard from "./Components/ToDo-Components/TodoCard";
import AddTaskButton from "./Components/UI/AddTaskButton";
import css from "./Components/App.module.css";

function App() {
  return (
    <div className={css.container}>
      <TodoCard />
      <AddTaskButton />
    </div>
  );
}

export default App;
