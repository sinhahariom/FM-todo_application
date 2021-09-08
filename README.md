#Redux Toolkit

npm install @reduxjs/toolkit
npm install react-redux

#Project Architecture

StateManagement - Redux Toolkit
Components - LandingPage, FilterList Components, Common ToDoItems
Global Styling - Global StyleGuide for App

#App Flow
1. After entering a valid string in the Create ToDo Box, once the check is selected, the item will move to the Active List.
2. By default the Active List is shown.
3. The same new Item will move to the All List.
4. In the Active list Or in the All List, if any item's check is selected, then the active type will change to completed or Vice Versa.
5. Completed items will be shown with Greyed Font and Crossed Line.
6. Count of the active list will be shown in the counter.
7. On click of the clear completed, the Completed array from the store will be emptied.

