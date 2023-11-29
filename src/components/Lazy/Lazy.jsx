export default function Lazy() {
    async function fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box>
            <h2>Lazy</h2>
            {data && (
                <div>
                    {data.map((user) => (
                        <p key={user.id}>{user.name}</p>
                    ))}
                </div>
            )}
        </Box>
    );
}
