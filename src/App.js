import React, { useEffect, useLayoutEffect, useState } from "react";
import addDays from "date-fns/addDays";
import TodoCard from "./Components/ToDo-Components/TodoCard";
import AddTaskButton from "./Components/UI/AddTaskButton";
import css from "./Components/App.module.css";
import NewTask from "./Components/ToDo-Components/NewTask";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "./Components/hooks/use-localStorage";

function App() {
  const [showInput, setShowInput] = useState(false);
  const [tasksUpdated, setTasksUpdated] = useLocalStorage("todos", []);

  useEffect(() => {
    localStorage.setItem(
      "expiryDate",
      String(addDays(new Date(), 1).getDate())
    );
  }, []);

  useLayoutEffect(() => {
    const expiry = localStorage.getItem("expiryDate");
    if (String(new Date().getDate()) === expiry) {
      console.log("expiry is equals to date");
      setTasksUpdated([]);
      localStorage.removeItem("todos");
    } else {
      JSON.parse(localStorage.getItem("todos"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const escReqHandler = (escReq) => {
    if (escReq) {
      setShowInput(false);
    }
  };
  const buttonClickedHandler = (buttonClickedState) => {
    if (buttonClickedState) {
      setShowInput(true);
    }
  };
  const getDataHandler = (addedTask) => {
    setTasksUpdated((prevStates) => {
      return [
        ...prevStates,
        { id: uuidv4(), data: addedTask, completed: false },
      ];
    });
  };
  return (
    <div className={css.container}>
      <TodoCard addedTask={tasksUpdated} setToDos={setTasksUpdated} />
      {showInput && (
        <NewTask gotEscReq={escReqHandler} getData={getDataHandler} />
      )}
      {!showInput && <AddTaskButton onButtonClicked={buttonClickedHandler} />}
    </div>
  );
}

export default App;
