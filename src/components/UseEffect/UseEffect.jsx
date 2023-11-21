import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import MyInput from '../Forms/MyInput';

function EditTitle() {
    const [title, setTitle] = useState('');
    const [firstname, setFirstname] = useState('');

    console.log('rendered');

    // only called when title prop is modified (not called on each render of the component)
    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => {
        console.log('first only when mounted');
    }, []);

    const [duration, setDuration] = useState(5);
    const [secondsLeft, setSecondsLeft] = useState(duration);

    const handleChange = (v) => {
        setDuration(v);
        setSecondsLeft(v);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft((durationLeft) => (durationLeft - 1 > 0 ? durationLeft - 1 : 0));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [duration]);

    return (
        <Box>
            <MyInput type="text" value={title} onChange={setTitle} placeholder="Title" />
            <MyInput type="text" value={firstname} onChange={setFirstname} placeholder="Firstname not used" />
            <hr />
            <MyInput type="text" value={duration} onChange={handleChange} placeholder="Timer" />
            Timer : {secondsLeft}s
        </Box>
    );
}

export default function UseEffect() {
    return <EditTitle />;
}
