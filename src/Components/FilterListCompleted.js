import './FilterListCompleted.scss';
import ToDoItem from './ToDoItem';
import { useSelector } from 'react-redux';

const FilterListCompleted = () =>{

    const todoCompletedListItems = useSelector((state)=> state.toDoStateManager.completedList);


    return (
        <div className="list-completed-wrapper">
             {
                todoCompletedListItems.map((allListItem)=>(
                    <ToDoItem inputText={allListItem.listItem} guid={allListItem.id} key={allListItem.id} ></ToDoItem>
                ))
            }
        </div>
    )
}

export default FilterListCompleted;