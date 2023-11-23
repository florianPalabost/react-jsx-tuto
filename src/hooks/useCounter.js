import { useCallback, useState } from "react";

/**
 * Returns an object containing a count value and two functions to increment and decrement the count.
 *
 * @param {number} countInitial - The initial value for the count. Defaults to 0 if not provided.
 * @return {object} An object with the following properties:
 *   - count: The current count value.
 *   - increment: A function to increment the count by 1.
 *   - decrement: A function to decrement the count by 1.
 */
export function useCounter(countInitial = 0) {
    const [count, setCount] = useState(countInitial);
    
    console.log('useCounter : render');
    
    // Memoisation with useCallback to avoid to regenerate the function
    const increment = useCallback(() => setCount((c) => c + 1));
    const decrement = useCallback(() => setCount((c) => c - 1));

    return {count, increment, decrement};
}