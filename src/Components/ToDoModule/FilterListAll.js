
import { useSelector } from 'react-redux';
import './FilterListAll.scss';
import ToDoItem from './ToDoItem';

const FilterListAll = () =>{

    const todoAllListItems = useSelector((state)=> state.toDoStateManager.allList);

    return (
        <div className="list-all-wrapper">
            {
                todoAllListItems.map((allListItem)=>(
                    <ToDoItem inputText={allListItem.listItem} guid={allListItem.id} type={allListItem.type} key={allListItem.id} ></ToDoItem>
                ))
            }
        </div>
    )
}

export default FilterListAll;