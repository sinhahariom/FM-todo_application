import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FilterListActive from "./FilterListActive";
import FilterListAll from "./FilterListAll";
import FilterListCompleted from "./FilterListCompleted";
import "./ToDoCard.scss";
import { v4 as uuidv4 } from "uuid";
import { addNewActiveItemIntoList } from "../StateManagement/reducer";
import { useSelector } from "react-redux";
import { clearCompletedListItems } from '../StateManagement/reducer';

const CreateNewTodoElements = () => {
  //state variable for the new todo input
  const [newtoDo, setNewToDo] = useState("");

  //dispatcher for the new todo created
  const dispatcher = useDispatch();

  const handleCreateNewItem = (e) => {
    if (e.target.value !== "") {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        setNewToDo(e.target.value);
      }
    }
  };

  const setActiveListItem = () => {
    if (!newtoDo == "") {
      let temp = {};
      temp.id = uuidv4();
      temp.listItem = newtoDo;
      temp.type = "active";
      dispatcher(addNewActiveItemIntoList(temp));
      setNewToDo("");
    }
  };

  //tosend the data after the newTodo is updated
  useEffect(() => {
    setActiveListItem();
  }, [newtoDo]);

  return (
    <div className="add-new-todo-elements-wrapper">
      <input
        type="text"
        placeholder="Create a new ToDo"
        onKeyDown={(e) => handleCreateNewItem(e)}
      ></input>
    </div>
  );
};

const ToDoCard = () => {

  //count for the active list items
  const count = useSelector((state)=>state.toDoStateManager.activeList.length);

  //dispatcher for clear completed
  const dispatcher = useDispatch();

  //set state variables for switching between tabs
  const [isAllTabActive, setIsAllTabActive] = useState(false);
  const [isCompletedTabActive, setIsCompletedTabActive] = useState(false);
  const [isActiveTabActive, setIsActiveTabActive] = useState(true);

  //tab click handler
  const handleTabClick = (tab) => {
    setIsAllTabActive(false);
    setIsCompletedTabActive(false);
    setIsActiveTabActive(false);

    switch (tab) {
      case "All":
        setIsAllTabActive((prev) => !prev);
        break;

      case "Active":
        setIsActiveTabActive((prev) => !prev);
        break;

      case "Completed":
        setIsCompletedTabActive((prev) => !prev);
        break;
    }
  };

  const handleClearCompleted = () =>{
      dispatcher(clearCompletedListItems([]));
  }

  return (
    <div className="todo-card-wrapper">
      <div className="todo-add-new-item">
        <CreateNewTodoElements></CreateNewTodoElements>
      </div>
      <div className="todo-added-list-items">
        {isActiveTabActive && <FilterListActive></FilterListActive>}
        {isAllTabActive && <FilterListAll></FilterListAll>}
        {isCompletedTabActive && <FilterListCompleted></FilterListCompleted>}
      </div>
      <div className="todo-tabs">
        <div className="todo-left-button-wrapper">
          <span>{count} Items Left</span>
        </div>
        <div className="todo-tabs-buttons-wrapper">
          <span onClick={() => handleTabClick("All")}>All</span>
          <span onClick={() => handleTabClick("Active")}>Active</span>
          <span onClick={() => handleTabClick("Completed")}>Completed</span>
        </div>
        <div className="todo-clear-button" onClick={handleClearCompleted}>
          <span>Clear Completed</span>
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
