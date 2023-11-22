import { Box } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import MyInput from '../../Forms/MyInput';

/**
 * A hook that returns a state value and a function to toggle it.
 *
 * @param {boolean} initial - The initial state value.
 * @return {Array} An array containing the state value and the toggle function.
 */
function useToggle(initial) {
    const [state, setState] = useState(initial);

    const toggle = () => {
        setState((s) => !s);
    };

    return [state, toggle];
}

function useCounter(countInitial) {
    const [count, setCount] = useState(countInitial);

    const increment = (c) => c + 1;
    const decrement = (c) => c - 1;

    return [count, increment, decrement];
}

export default function CustomHook() {
    const [checked, toggleChecked] = useToggle(false);

    return (
        <Box>
            <h2>Custom Hook</h2>
            <label>
                <input type="checkbox" checked={checked} onChange={toggleChecked} />
                Check me
            </label>
            {checked && <p>You checked me !</p>}
        </Box>
    );
}
