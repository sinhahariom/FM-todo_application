import './FilterListActive.scss';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';

const FilterListActive = () =>{

    const todoActiveListItems = useSelector((state)=> state.toDoStateManager.activeList);
    
    return (
        <div className="list-active-wrapper">
              {
                todoActiveListItems.map((activeListItem)=>(
                    <ToDoItem inputText={activeListItem.listItem} guid={activeListItem.id} key={activeListItem.id} type={activeListItem.type}></ToDoItem>
                ))
            }
        </div>
    )
}

export default FilterListActive;