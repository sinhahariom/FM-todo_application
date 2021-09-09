import './FilterListCompleted.scss';
import ToDoItem from './ToDoItem';
import { useSelector } from 'react-redux';

const FilterListCompleted = () =>{

    const todoCompletedListItems = useSelector((state)=> state.toDoStateManager.completedList);


    return (
        <div className="list-completed-wrapper">
             {
                todoCompletedListItems.map((completedListItem)=>(
                    <ToDoItem inputText={completedListItem.listItem} guid={completedListItem.id} type={completedListItem.type} key={completedListItem.id} ></ToDoItem>
                ))
            }
        </div>
    )
}

export default FilterListCompleted;