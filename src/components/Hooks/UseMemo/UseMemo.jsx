import { Box } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import MyInput from '../../Forms/MyInput';

export default function UseMemo() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // useMemo : should be used when computed value take a long time
    const security = useMemo(() => {
        // only prompted when password changed
        console.log('calculating...');

        // will be stock in security var
        return password.length >= 8 ? 'strong' : 'weak';
    }, [password]);

    return (
        <Box>
            <h2>UseMemo</h2>
            <MyInput type="text" value={username} onChange={setUsername} placeholder="Username" />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <p>Password Security : {security} </p>
        </Box>
    );
}
