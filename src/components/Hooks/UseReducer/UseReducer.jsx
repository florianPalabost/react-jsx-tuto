import { Box } from '@mui/material';
import { useReducer } from 'react';
import { useTodos } from '../../../hooks/useTodos';
export default function UseReducer() {
    // useReducer : should be used when state change is complex
    // useReducer(state, action)

    // const reducer = function (state, action) {
    //     // Should return the new state based on the action
    //     console.log(state, action);

    //     switch (action.type) {
    //         case 'TOGGLE':
    //             return {
    //                 ...state,
    //                 todos: state.todos.map((todo) =>
    //                     todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
    //                 )
    //             };
    //         case 'REMOVE':
    //             return {
    //                 ...state,
    //                 todos: state.todos.filter((todo) => todo.id !== action.id)
    //             };
    //     }
    //     return state;
    // };

    // // dispatch trigger changes
    // const [state, dispatch] = useReducer(reducer, {
    //     todos: [
    //         {
    //             id: 1,
    //             name: 'Todo 1',
    //             checked: false
    //         },
    //         {
    //             id: 2,
    //             name: 'Todo 2',
    //             checked: true
    //         },
    //         {
    //             id: 3,
    //             name: 'Todo 3',
    //             checked: false
    //         }
    //     ]
    // });

    /** WITH custom hook useTodos */
    const { todos, toggleTodo, removeTodo } = useTodos();
    return (
        <Box>
            <h2>UseReducer</h2>
            <p>click on todo btn to delete them</p>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.name}
                        <input type="checkbox" checked={todo.checked} onChange={() => toggleTodo(todo.id)} />
                        <button onClick={() => removeTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </Box>
    );
}
