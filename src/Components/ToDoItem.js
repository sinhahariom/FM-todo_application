import './ToDoItem.scss';

const ToDoItem = () => {
    return ( 
        <div className="todo-item-wrapper">
             <input type="radio"></input>
             <input type="text" placeholder="Create a new ToDo"></input>
        </div>
     );
}
 
export default ToDoItem;