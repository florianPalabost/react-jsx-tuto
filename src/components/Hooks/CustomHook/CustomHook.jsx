import { Box } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import MyInput from '../../Forms/MyInput';
import { useToggle } from '../../../hooks/useToggle';
import { useCounter } from '../../../hooks/useCounter';
import { useDocumentTitle } from '../../../hooks/useDocumentTitle';
import { useFetch } from '../../../hooks/useFetch';

export default function CustomHook() {
    // hooks are in @/hooks folder
    const [checked, toggleChecked] = useToggle(false);
    const { count, increment, decrement } = useCounter(1);

    const [name, setName] = useState('');

    useDocumentTitle(name ? 'Edit ' + name : null);

    const { data: users, loading, errors } = useFetch('https://jsonplaceholder.typicode.com/users');
    debugger;
    return (
        <Box>
            <h2>Custom Hook</h2>
            <h3>UseToggle</h3>
            <label>
                <input type="checkbox" checked={checked} onChange={toggleChecked} />
                Check me
            </label>
            {checked && <p>You checked me !</p>}
            <Box>
                <h3>UseCounter</h3>
                <p>Counter : {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </Box>
            <Box>
                <h3>UseDocumentTitle</h3>
                <label>
                    Document title :
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </Box>
            <Box>
                <h3>UseFetch</h3>
                {loading && <p>Loading ...</p>}
                {errors && <p>{errors.message}</p>}
                {users && (
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}> {user.name}</li>
                        ))}
                    </ul>
                )}
            </Box>
        </Box>
    );
}
