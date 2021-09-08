import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNewActiveItemIntoList, addNewCompletedItemIntoList, removeTransitionItemFromActiveList, removeTransitionItemFromCompletedList} from '../StateManagement/reducer';
import './ToDoItem.scss';

const ToDoItem = ({inputText,guid, type}) => {
     
     //get the All todo List 
     const allList = useSelector((state)=>state.toDoStateManager.allList);

     //dispatcher to call an action for an upate to'active' or 'completed' in the store
     const dispatcher = useDispatch();

     const handleRadioSelect = () =>{
          let selectedItem = allList.filter(list=>{
               return list.id === guid;
          })

          let type = selectedItem[0].type;
          let tempObject = {};
          tempObject.id = selectedItem[0].id;
          tempObject.listItem = selectedItem[0].listItem;

          if(type === 'active'){
               tempObject.type = 'completed';
               dispatcher(removeTransitionItemFromActiveList(selectedItem[0]));
               dispatcher(addNewCompletedItemIntoList(tempObject));
          }else if(type='completed'){
               tempObject.type = 'active';
               dispatcher(removeTransitionItemFromCompletedList(selectedItem[0]));
               dispatcher(addNewActiveItemIntoList(tempObject));
          }
          //add another check for error page
     }
     console.log(type);
    return ( 
        <div className={type === 'active' ? 'todo-item-wrapper active' : 'todo-item-wrapper completed'}>
             <div onClick={handleRadioSelect}></div>
             <span>{inputText}</span>
        </div>
     );
}
 
export default ToDoItem;