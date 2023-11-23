import { useState } from "react";

/**
 * A hook that returns a state value and a function to toggle it.
 *
 * @param {boolean} initial - The initial state value.
 * @return {Array} An array containing the state value and the toggle function.
 */
export function useToggle(initial) {
    const [state, setState] = useState(initial);

    const toggle = () => {
        setState((s) => !s);
    };

    return [state, toggle];
};