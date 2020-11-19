import React from 'react';
import AddTodo from './Components/AddToDo';
import VisibleTodoList from './Components/ToDoList';
import Footer from './Components/Footer';

const ToDoList = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default ToDoList;