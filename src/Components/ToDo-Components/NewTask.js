import React, { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import css from "./NewTask.module.css";
import PropTypes from "prop-types";

function NewTask({ getData, gotEscReq }) {
  // const [blur,setBlur]=useState(false)
  const [newTask, setNewTask] = useState("");
  const [errorPopUp, setErrorPopUP] = useState();
  const [escReq, setEscReq] = useState(false);
  const changeHandler = (e) => {
    // console.log(e.focus())
    setNewTask(e.target.value);
  };
  // const focusOutHandler=()=>{
  //   setBlur(true)
  //   // console.log("lost focus")
  // }
  const inputRef=useRef();
  
    // if(!inputRef.current.focus()){
    //   setEscReq(true);
    //   gotEscReq(escReq);
    // }
  
  const keyDownHandler = (e) => {
    // if(blur){  if (e.key === "Escape") {
    //   console.log("esc pressed after blur")
    //   setEscReq(true);
    //   gotEscReq(escReq);
    // }}
    if (e.key === "Escape") {
      setEscReq(true);
      gotEscReq(escReq);
    }
    if (e.key === "Enter") {
      if (newTask.length > 0) {
        getData(newTask);
        setNewTask("");
      } else {
        setErrorPopUP({
          title: "Invalid Task",
          message: "Task can't be empty",
        });
      }
    }
  };
  const ClosePopUpHandler = () => {
    setErrorPopUP(null);
  };

  return (
    <>
      {errorPopUp && (
        <ErrorModal
          title={errorPopUp.title}
          message={errorPopUp.message}
          onClosePopUp={ClosePopUpHandler}
        />
      )}
      <input
        className={css["input_field"]}
        type="text"
        placeholder="Add your new task"
        onKeyDown={keyDownHandler}
        value={newTask}
        ref={inputRef}
        // onBlur={focusOutHandler}
        onChange={changeHandler}
      />
    </>
  );
}

NewTask.propTypes = {
  getData:PropTypes.func,
  gotEscReq:PropTypes.func
};
export default NewTask;
