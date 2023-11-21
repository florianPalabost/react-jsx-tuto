import { Box, InputLabel, MenuItem, Select } from '@mui/material';

export default function MySelect({ options, onChange, label, ...props }) {
    return (
        <Box>
            <InputLabel>{label}</InputLabel>
            <Select checked={checked} onChange={(e) => onChange(e.target.value)} label={label} {...props}>
                {options.map((option) => (
                    <MenuItem key={option.key} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
}
