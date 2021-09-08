import './FilterListActive.scss';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';

const FilterListActive = () =>{

    const todoAllListItems = useSelector((state)=> state.toDoStateManager.activeList);
    
    return (
        <div className="list-active-wrapper">
              {
                todoAllListItems.map((allListItem)=>(
                    <ToDoItem inputText={allListItem.listItem} key={allListItem.id} ></ToDoItem>
                ))
            }
        </div>
    )
}

export default FilterListActive;