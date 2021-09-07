import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNewActiveItemIntoList } from '../StateManagement/reducer';
import './FilterListAll.scss';

const FilterListAll = () =>{

    const tempData = [
        {
            id : 1,
            listContent : "This is a test list item."
        },
        {
            id : 2,
            listContent : "This is a test list item."
        }
    ]
    const todoAllListItems = useSelector((state)=> state.toDoStateManager.allList);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(addNewActiveItemIntoList(tempData));
    },[])

    return (
        <div className="list-all-wrapper">All Works !</div>
    )
}

export default FilterListAll;