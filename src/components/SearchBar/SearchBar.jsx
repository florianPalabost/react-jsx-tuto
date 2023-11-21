import { Box } from '@mui/material';
import MyInput from '../Forms/MyInput';
import MyCheckbox from '../Forms/MyCheckbox';

export default function SearchBar({ showOnlyInStock, onStockOnlyChange, searchValue, onSearchChange }) {
    return (
        <Box>
            <MyInput type="text" value={searchValue} onChange={onSearchChange} placeholder="Search..." />
            <MyCheckbox checked={showOnlyInStock} onChange={onStockOnlyChange} label="Only show products in stock" />
        </Box>
    );
}
