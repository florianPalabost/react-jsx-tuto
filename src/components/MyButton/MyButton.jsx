import { Box, Button } from '@mui/material';

export default function MyButton({ children, ...props }) {
    return (
        <Box>
            <Button {...props}>{children}</Button>
        </Box>
    );
}
