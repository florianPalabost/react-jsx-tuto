import { Box, TextField } from '@mui/material';

/**
 * Renders an input component.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - {string} type - The type of the input.
 *   - {string} value - The value of the input.
 *   - {function} onChange - The onChange event handler for the input.
 *   - {Object} ...props - Additional props for the input element.
 * @return {JSX.Element} The rendered input component.
 */
export default function MyInput({ type, value, onChange, ...props }) {
    let inputWanted = null;

    switch (type) {
        case 'text':
            inputWanted = <TextField type={type} value={value} onChange={(e) => onChange(e.target.value)} {...props} />;
            break;
        case 'checkbox':
            inputWanted = <MyCheckbox checked={value} onChange={(e) => onChange(e.target.checked)} {...props} />;
            break;
        case 'select':
            inputWanted = <MySelect value={value} onChange={(e) => onChange(e.target.value)} {...props} />;
            break;
        default:
            break;
    }

    return <Box>{inputWanted}</Box>;
}
