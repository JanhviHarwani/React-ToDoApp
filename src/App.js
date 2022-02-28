import React, { useEffect, useState } from "react";
import addDays from 'date-fns/addDays'
import TodoCard from "./Components/ToDo-Components/TodoCard";
import AddTaskButton from "./Components/UI/AddTaskButton";
import css from "./Components/App.module.css";
import NewTask from "./Components/ToDo-Components/NewTask";

// let DATA;
// if (localStorage.getItem("tasks") === null) {
//   DATA = [];
// } else {
//   DATA = JSON.parse(localStorage.getItem("tasks"));
// }
function App() {
  const [date, setDate] = useState("");

  const [showInput, setShowInput] = useState(false);

  const [tasksUpdated, setTasksUpdated] = useState(()=>{
    if (localStorage.getItem("tasks") === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("tasks"));
    }

  });
  // const newdateStamp = new Date();
  // let newdate = newdateStamp.getDate();

  const buttonClickedHandler = (buttonClickedState) => {
    if (buttonClickedState) {
      setShowInput(true);
    }
  };
useEffect(()=>{
  localStorage.setItem('expiry',addDays(new Date(),1).getDate())
  console.log(localStorage.getItem("expiry"))
},[])
  
useEffect(() => {
const expiry=localStorage.getItem("expiry");
if(new Date().getDate()===expiry){
  console.log("expiry is equals to date")
  setTasksUpdated([])
  localStorage.removeItem('tasks')
}
 else {
      return JSON.parse(localStorage.getItem("tasks"));
    }
  }, []);
useEffect(()=>{
  localStorage.setItem("tasks", JSON.stringify(tasksUpdated));
},[tasksUpdated])
  const escReqHandler = (escReq) => {
    if (escReq) {
      setShowInput(false);
    }
  };

  const getDataHandler = (addedTask) => {
    setTasksUpdated((prevStates) => {
      return [...prevStates, { id: Math.random(), data: addedTask }];
    });
  };

  const getDatehandler = (gotDate) => {
    setDate(gotDate);
  };

  return (
    <div className={css.container}>
      <TodoCard addedTask={tasksUpdated} currDate={getDatehandler} />
      {showInput && (
        <NewTask gotEscReq={escReqHandler} getData={getDataHandler} />
      )}
      {!showInput && <AddTaskButton onButtonClicked={buttonClickedHandler} />}
    </div>
  );
}

export default App;
