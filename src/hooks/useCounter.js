import { useState } from "react";


/**
 * Creates a counter hook that manages a count state and provides
 * increment and decrement functions.
 *
 * @param {number} countInitial - The initial value of the count. Default is 0.
 * @return {object} - An object containing the count, increment, and decrement functions.
 */
export function useCounter(countInitial = 0) {
    const [count, setCount] = useState(countInitial);

    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => c - 1);

    return {count, increment, decrement};
}