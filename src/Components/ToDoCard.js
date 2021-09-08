import { useState } from 'react';
import FilterListActive from './FilterListActive';
import FilterListAll from './FilterListAll';
import FilterListCompleted from './FilterListCompleted';
import './ToDoCard.scss';

const CreateNewTodoElements = () =>{
    return (
        <div className="add-new-todo-elements-wrapper">
            <input type="radio"></input>
            <input type="text" placeholder="Create a new ToDo"></input>
        </div>
    );
}

const ToDoCard = () =>{

    //set state variables for switching between tabs
    const [isAllTabActive, setIsAllTabActive] = useState(false);
    const [isCompletedTabActive, setIsCompletedTabActive] = useState(false);
    const [isActiveTabActive, setIsActiveTabActive] = useState(false);

    //tab click handler
    const handleTabClick = (tab) =>{

        setIsAllTabActive(false);
        setIsCompletedTabActive(false);
        setIsActiveTabActive(false);

        switch(tab){
            case 'All' : setIsAllTabActive(prev=> !prev); 
            break;

            case 'Active' : setIsActiveTabActive(prev=> !prev); 
            break;

            case 'Completed' : setIsCompletedTabActive(prev=> !prev); 
            break;
        }
    }

    return (
        <div className="todo-card-wrapper">
            <div className="todo-add-new-item">
                <CreateNewTodoElements></CreateNewTodoElements>
            </div>
            <div className="todo-added-list-items">
                {isActiveTabActive && <FilterListActive></FilterListActive> }
                { isAllTabActive && <FilterListAll></FilterListAll> }
                { isCompletedTabActive && <FilterListCompleted></FilterListCompleted> }
            </div>
            <div className="todo-tabs">
                <div className="todo-left-button-wrapper">
                    <span>5 Items Left</span>
                </div>
                <div className="todo-tabs-buttons-wrapper">
                    <span onClick={()=>handleTabClick('All')} >All</span>
                    <span onClick={()=>handleTabClick('Active')} >Active</span>
                    <span onClick={()=>handleTabClick('Completed')} >Completed</span>
                </div>
                <div className="todo-clear-button">
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>
    )
}

export default ToDoCard;