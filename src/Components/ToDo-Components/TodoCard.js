import React from "react";
import Card from "../UI/Card";
import DateStamp from "./DateStamp";
import Tasks from "./Tasks";

const DUMMY_DATA = [
  { id: 1, data: "Buy new sweatshirt" },
  { id: 2, data: "Begin promotional phase" },
  { id: 3, data: "Read an article" },
  { id: 4, data: "Try not to fall asleep" },
  { id: 5, data: "Watch 'Sherlock'" },
  { id: 6, data: "Begin QA for the product" },
  { id: 7, data: "Go for a walk" },
];

const TodoCard = () => {
  return (
    <Card>
      <DateStamp />
      <Tasks passedData={DUMMY_DATA} />
    </Card>
  );
};

export default TodoCard;
