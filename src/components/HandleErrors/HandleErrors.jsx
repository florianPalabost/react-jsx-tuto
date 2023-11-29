import { useEffect } from 'react';

export default function HandleErrors({ product }) {
    const handleClick = () => {
        // Don't crash app
        throw new Error('Something went wrong');
    };

    // crash the app
    useEffect(() => {
        throw new Error('use Effect : Something went wrong');
    }, []);

    return (
        <>
            <button onClick={handleClick}>Click me</button>
        </>
    );
}
