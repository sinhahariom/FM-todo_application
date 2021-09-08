import './ToDoItem.scss';

const ToDoItem = ({inputText}) => {
    return ( 
        <div className="todo-item-wrapper">
             <div></div>
             <span>{inputText}</span>
        </div>
     );
}
 
export default ToDoItem;