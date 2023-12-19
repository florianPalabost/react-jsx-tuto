import { Button } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../../hooks/useTheme';

export default function MyButton({ children, ...props }) {
    // retrieve value of wanted context
    const theme = useContext(ThemeContext);

    return (
        <Button theme={theme} {...props}>
            {children}
        </Button>
    );
}
