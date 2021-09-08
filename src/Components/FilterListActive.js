import './FilterListActive.scss';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';

const FilterListActive = () =>{

    const todoActiveListItems = useSelector((state)=> state.toDoStateManager.activeList);
    
    return (
        <div className="list-active-wrapper">
              {
                todoActiveListItems.map((allListItem)=>(
                    <ToDoItem inputText={allListItem.listItem} guid={allListItem.id} key={allListItem.id} type={allListItem.type}></ToDoItem>
                ))
            }
        </div>
    )
}

export default FilterListActive;