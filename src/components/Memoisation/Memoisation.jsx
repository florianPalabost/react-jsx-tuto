import { Box } from '@mui/material';
import { useCounter } from '../../hooks/useCounter';
import { memo } from 'react';

const InfoMemo = memo(function Info() {
    console.log('InfoMemo : render');

    return (
        <Box>
            <h3>Info</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquam dignissimos laborum
                exercitationem. Maiores cupiditate, consectetur quibusdam earum dolores assumenda consequatur reiciendis
                explicabo corrupti facere ipsum? Consectetur quam reprehenderit vel.
            </p>
        </Box>
    );
});

export default function Memoisation() {
    const { count, increment, decrement } = useCounter(1);

    return (
        <Box>
            <h2>Memoisation</h2>
            <Box>
                <p>Counter : {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </Box>

            {/* Info component will be re render each time count change => use memo() */}
            <InfoMemo />
        </Box>
    );
}
