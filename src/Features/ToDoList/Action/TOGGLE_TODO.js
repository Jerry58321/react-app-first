export const toggleTodo = id => ({
   type: "TOGGLE_TODO",
   id
});

export const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_TODO":
            let newToDo = state.todos.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );

            return { ...state, todos: newToDo };
        default:
            return state;
    }
};