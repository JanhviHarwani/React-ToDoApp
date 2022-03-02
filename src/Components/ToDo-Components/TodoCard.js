import Card from "../UI/Card";
import DateStamp from "./DateStamp";
import Tasks from "./Tasks";

const TodoCard = ({ addedTask, setToDos }) => {
  return (
    <Card>
      <DateStamp />
      <Tasks setToDos={setToDos} passedData={addedTask} />
    </Card>
  );
};

export default TodoCard;
