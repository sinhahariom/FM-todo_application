import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNewActiveItemIntoList } from '../StateManagement/reducer';
import './FilterListAll.scss';
import ToDoItem from './ToDoItem';

const FilterListAll = () =>{

    const todoAllListItems = useSelector((state)=> state.toDoStateManager.allList);

    return (
        <div className="list-all-wrapper">
            {
                todoAllListItems.map((allListItem)=>(
                    <ToDoItem inputText={allListItem.listItem} key={allListItem.id} ></ToDoItem>
                ))
            }
        </div>
    )
}

export default FilterListAll;