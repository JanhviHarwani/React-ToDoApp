import React from "react";
import TodoCard from "./Components/ToDo-Components/TodoCard";
import AddTaskButton from "./Components/UI/AddTaskButton"
import css from "./Components/App.module.css";

const DUMMY_DATA = [
  { id: 1, data: "Buy new sweatshirt" },
  { id: 2, data: "Begin promotional phase" },
  { id: 3, data: "Read an article" },
  { id: 4, data: "Try not to fall asleep" },
  { id: 5, data: "Watch 'Sherlock'" },
  { id: 6, data: "Begin QA for the product" },
  { id: 7, data: "Go for a walk" },
];
function App() {
  return (
    <div className={css.container}>
      <TodoCard dummyData={DUMMY_DATA}/>
      <AddTaskButton />
    </div>
  );
}

export default App;
