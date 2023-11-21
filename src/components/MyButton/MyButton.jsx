import { Button } from '@mui/material';

export default function MyButton({ children, ...props }) {
    return <Button {...props}>{children}</Button>;
}
