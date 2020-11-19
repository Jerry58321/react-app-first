import React from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import { useTranslation } from "react-i18next";

const AddTodo = () => {
    let input;

    const dispatch = useDispatch();
    const { t } = useTranslation('ToDoList');

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addTodo(input.value));
                input.value = "";
            }}>
                <input ref={node => (input = node)}/>
                <button type="submit">{t("addtodo")}</button>
            </form>
        </div>
    );
};

export default AddTodo;