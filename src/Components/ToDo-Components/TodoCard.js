import React from "react";
import Card from "../UI/Card";
import DateStamp from "./DateStamp";
import Tasks from "./Tasks";
const TodoCard = (props) => {

  return (
    <Card>
      <DateStamp />
      <Tasks passedData={props.dummyData}/>
    </Card>
  );
};
export default TodoCard;
