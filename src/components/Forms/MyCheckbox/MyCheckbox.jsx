import { Box, Checkbox } from '@mui/material';

export default function MyCheckbox({ checked, onChange, label, ...props }) {
    return (
        <Box>
            <Checkbox checked={checked} onChange={(e) => onChange(e.target.checked)} label={label} {...props} />
            <label>{label}</label>
        </Box>
    );
}
