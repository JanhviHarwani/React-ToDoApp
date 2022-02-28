import Card from "../UI/Card";
import DateStamp from "./DateStamp";
import Tasks from "./Tasks";

const TodoCard = ({ addedTask,currDate }) => {
  const getDateHandler=(today)=>{
    const date=today;
  currDate(date);
   
  }
  return (
    <Card>
      <DateStamp curerntDate={getDateHandler} />
      <Tasks passedData={addedTask} />
    </Card>
  );
};

export default TodoCard;
