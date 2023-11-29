import { useCallback, useReducer } from "react";

function todosReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
                )
            };
        case 'REMOVE':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id)
            };
    }
    return state;
}



/**
 * Initializes and returns a todos object.
 *
 * @return {Object} The todos object containing the todos array, toggleTodo function, and removeTodo function.
 */
export function useTodos() {
    const [state, dispatch] = useReducer(todosReducer, {
        todos: [
            {
                id: 1,
                name: 'Todo 1',
                checked: false
            },
            {
                id: 2,
                name: 'Todo 2',
                checked: true
            },
            {
                id: 3,
                name: 'Todo 3',
                checked: false
            }
        ]
    });

    return {
        todos: state.todos,
        toggleTodo: useCallback((todoId) => dispatch({ type: 'TOGGLE', id: todoId })),
        removeTodo: useCallback((todoId) => dispatch({ type: 'REMOVE', id: todoId })),
    }
}