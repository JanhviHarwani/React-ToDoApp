import Card from "../UI/Card";
import DateStamp from "./DateStamp";
import Tasks from "./Tasks";
import PropTypes, { bool } from "prop-types";
const TodoCard = ({ addedTask, setToDos }) => {
  return (
    <Card>
      <DateStamp />
      <Tasks setToDos={setToDos} taskAdded={addedTask} />
    </Card>
  );
};
TodoCard.propTypes = {
  addedTask: PropTypes.arrayOf(  
    PropTypes.exact({
      id: PropTypes.string,
      data: PropTypes.string,
      completed: bool,
    })
  ),
  setToDos: PropTypes.func
};
export default TodoCard;
