import React from 'react';
import Todo from './Todo';
import { useDispatch } from "react-redux";
import { toggleTodo } from "../actions";
import { VisibilityFilters } from "../constants";
import { useFeatureSelector } from "../hooks";

const getVisibleTodos = store => {
    switch (store.filter) {
        case VisibilityFilters.SHOW_ALL:
            return store.todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return store.todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return store.todos.filter(t => !t.completed);
        default:
            return [];
    }
};

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useFeatureSelector(getVisibleTodos);

    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo.id))} />
            ))}
        </ul>
    );
};

export default TodoList;