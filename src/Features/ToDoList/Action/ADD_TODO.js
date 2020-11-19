let nextTodoId = 0;
export const addTodo = text => ({
    type: "ADD_TODO",
    id: nextTodoId++,
    text
});

export const reducer = (state, action) => {
  switch (action.type) {
      case "ADD_TODO":
          let newTodos = [
              ...state.todos,
              {
                  id: action.id,
                  text: action.text,
                  completed: false
              }
          ];

          return { ...state, todos: newTodos };
      default:
          return state;
  }
};