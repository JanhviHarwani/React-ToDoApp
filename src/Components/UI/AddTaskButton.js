import button from '../../assets/icons8-add-50.png'
import css from './AddButton.module.css'
const AddTaskButton=()=>{
   
    return(<img className={css.addBtn} height={65} width={65} src={button} alt="Add button img"/>)
}
export default AddTaskButton;